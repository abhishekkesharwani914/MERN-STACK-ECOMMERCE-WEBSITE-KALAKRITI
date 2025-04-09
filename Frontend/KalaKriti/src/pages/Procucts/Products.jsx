import { useState, useEffect, useContext } from "react";
import { getID } from "../../api/Api.jsx";
import { useParams } from "react-router";
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Card  from "@mui/material/Card";
import Reviews from "../../components/Reveiws/Reviews";
import ShowReview from "../../components/ShowReview/ShowReview";
import Loading from "../../components/Loading.jsx";
import "./Product.css"
import { AppContent } from "../../Context/AppContext.jsx";
import { useNavigate } from "react-router";

function Product () {
    const {id} = useParams();
    const [products, setProducts] = useState([]);
    const [reviews, setReviews] = useState([]);

    const {addCartItems} = useContext(AppContent);
    const navigate = useNavigate();
    
    const fetchData = async (id) => {
        try {
            const response = await getID(id);
            setProducts(response.data);
            setReviews(response.data.reviews);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    
    useEffect(() => {
        fetchData(id);
    }, []);

    const onClickCart = (e) => {
        e.preventDefault();
        let quantity = 1;
        addCartItems(id, quantity); // Adding to cart
        // setCart([...cart, {itemId: id, quantity}]); // Updating cart state
        // console.log(cart)
    }

    const onClickBuy = (e) => {
        e.preventDefault();
        console.log("Buy Now clicked for product ID:", id);
        let quantity = 1;
        addCartItems(id, quantity); // Adding to cart
        navigate("/cart"); // Redirecting to cart page

    }

    if(!products && !reviews) {
        return <Loading/>;
    }

    return (
        <>
        <div className="main p-15 flex flex-wrap justify-center align-center w-full gap-5 md:gap-15">
            <div className="img-stick ">
            <Card sx={{ maxWidth: 480,maxHeight:350 }}>
            <CardMedia
                component="img"
                alt={`${products.title}`}
                height="140"
                image={`${products.image_url}`}
                className='w-20 rounded-8  bg-cover  h-80'
            />
            {/* <img src={`${products.image_url}`} alt={`${products.title}`} className="w-120" /> */}
            </Card>
            <CardActions className=" flex mt-2 flex-col gap-2 sm:gap-0 sm:flex-row">
                <Button size="small" className='btn w-full sm:w-1/2 ' onClick={onClickBuy}>Buy</Button>
                <Button size="small" className='btn w-full sm:w-1/2 ' onClick={onClickCart}>Add to cart</Button>
            </CardActions>
            </div>
            <div className="content-div flex flex-col w-xl pl-10 align-center">
                
                <h1 className="text-2xl sm:text-4xl mb-5"><b>{products.title}</b></h1>
                <p className="mb-5 w-fit">{products.description}</p>
                <p className="mb-5"><b>&#x20B9;{products.price}</b></p>
                <p className="mb-5"><b>Specification:</b></p>
                {/* 1. Ensuring specifications is an Object 
                        "products.specifications || {}" ensures that even if specifications is null or undefined, an empty object {} is used instead.

                    2. Mapping Over an Object (specifications)
                        Object.entries(products.specifications) converts the object into an array of key-value pairs, allowing .map() to work. */}
                {Object.entries(products.specifications || {}).map(([key, value]) => (
                    <li key={key}><strong>{key}:</strong> {value}</li>
                ))}
                <hr className="opacity-50 mt-10" />
                <Reviews reviews={reviews} setReviews={setReviews}/>
                <ShowReview reviews={reviews || []}/>
                
                
            </div>
        </div>

        </>
    )
}

export default Product
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Home.css";
import { useState, useEffect, useContext } from "react";
import { getItems } from '../../api/Api.jsx'; 
import Loading from '../../components/Loading.jsx';
import { AppContent } from '../../Context/AppContext.jsx';


function Home() {
    
    const [items, setItems] = useState([]);

    const {userData} = useContext(AppContent)

    const fetchData = async () => {
        try {
            const response = await getItems();
            setItems(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };

    useEffect(() => {
        fetchData();
    }, []);

    const handleClick = (e) => {
        setLike(!like);
        
    }

    if (!items || items.length === 0) {
        return <Loading/>;
    }
    
    return (
        <>
        <div className='mt-10 mb-10'>
            {/* <h1>{userData? <><div className='text-center mb-5 border border-black rounded rounded-full '>{userData.userName}</div></>: "Hello develover"}</h1> */}
        <ul className='relative flex flex-row-3 flex-wrap justify-evenly gap-10 '>
            {items.map(item => (
            <li key={item._id}>
                
                <a href={`/items/${item._id}`}>
                <Card sx={{ maxWidth: 345 }}>
                    <div className='flex justify-center items-center absolute z-10 text-lg font-bold text-left ml-75 mt-4 p-4 z-99 bg-[#f1f1f1] h-5 w-5 rounded-full' id={`${item._id}`} onClick={handleClick}>
                        <i className="fa-regular fa-heart text-black"></i>
                    </div>
                    <CardMedia
                        component="img"
                        alt={`${item.title}`}
                        height="140"
                        image={`${item.image_url}`}
                        className='img bg-cover'
                    
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.description}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                        &#x20B9;{item.price.toLocaleString("en-IN")}
                        </Typography>
                    </CardContent>
                </Card>
                </a>
            </li>
            ))}
        </ul>
        </div>
        </>
    )
};

export default Home;
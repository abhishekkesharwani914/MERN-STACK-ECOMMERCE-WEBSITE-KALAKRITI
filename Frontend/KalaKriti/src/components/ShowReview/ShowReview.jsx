import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "./ShowReview.css"

function ShowReview({reviews, products, setProducts}) {

    if (!reviews || reviews.length === 0) {
        return <p>No reviews</p>;
    }

    //to convert "2024-03-26T14:23:45.678Z" this date in to 26/03/2024
    const formatDate = (isoDate) => {
        return new Date(isoDate).toLocaleDateString("en-GB");
      };

    return (
        <>  
            
                <h1 className='mt-5 mb-5 text-xl'>All rating & reviews</h1>
                <ul className="flex flex-row-2 flex-wrap justify-evenly gap-10">
                    {reviews.map(review => {
                        return (
                        <li key={review._id}>
                            <Card sx={{ maxWidth: 400 }} className='review-main'>
                                <CardContent className='review-content'>
                                    <h1 className='mb-1'>@ Jane Doe</h1>
                                    <p class="starability-result" data-rating={`${review.rating}`}></p>
                                    <p className='mb-1'>{review.review}</p>
                                    <p className='mb-1'>{formatDate(review.date)}</p>
                                </CardContent>
                            </Card>
                        </li>
                        )
                    })}
                </ul>
            
        </>
    )
}

export default ShowReview
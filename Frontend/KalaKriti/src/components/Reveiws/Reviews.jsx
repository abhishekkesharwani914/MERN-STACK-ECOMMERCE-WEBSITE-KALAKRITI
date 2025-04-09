import Slider from '@mui/material/Slider';
import { useState } from 'react';
import "./Reviews.css"
import Button from '@mui/material/Button';
import { useParams } from 'react-router';
import { postReview } from '../../api/Api.jsx';

function Reviews({reviews, setReviews}) {

    const [review, setReview] = useState({
        rating: 0,
        review:"",
        date: Date.now()
    });

    const {id} = useParams();
    
    const addReviewData = async () => {
        const res = await postReview(id,review);
        console.log(res);
        setReviews((reviews)=>[
            ...reviews,res
        ])
        setReview({rating:0, review:""})

    }

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        addReviewData();
    };

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setReview(prevReview => {
            return {
                ...prevReview, [name]: value
            }
        });
    }

    // function valuetext(value) {
    //     return `${value}`;
    // };

    return (
        <>
            <div className="reviews mt-5">
                <h1 className='mb-2 text-xl'>Rating & Reviews</h1>
                <form  onSubmit={handleReviewSubmit} className='flex flex-col'>
                    {/* <Slider
                        defaultValue={3}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        shiftStep={1}
                        step={1}    
                        marks
                        min={1}
                        max={5}
                        onChange={handleChange}
                        className='color-[#332e2b]'
                        value={review.rating}
                        name="rating"
                    /> */}

                    <fieldset class="starability-slot">
                        <input type="radio" id="no-rate" class="input-no-rate" name="rating" value="0" checked aria-label="No rating." />
                        <input type="radio" id="first-rate1" name="rating" value={1} min={1} max={5} onChange={handleChange} />
                        <label for="first-rate1" title="Terrible">1 star</label>
                        <input type="radio" id="first-rate2" name="rating" value={2} min={1} max={5} onChange={handleChange} />
                        <label for="first-rate2" title="Not good">2 stars</label>
                        <input type="radio" id="first-rate3" name="rating" value={3} min={1} max={5} onChange={handleChange} />
                        <label for="first-rate3" title="Average">3 stars</label>
                        <input type="radio" id="first-rate4" name="rating" value={4} min={1} max={5} onChange={handleChange} />
                        <label for="first-rate4" title="Very good">4 stars</label>
                        <input type="radio" id="first-rate5" name="rating" value={5} min={1} max={5} onChange={handleChange} />
                        <label for="first-rate5" title="Amazing">5 stars</label>
                    </fieldset>
                                        
                    <textarea
                        placeholder="Write your review here..."
                        value={review.review}
                        onChange={handleChange}
                        required
                        rows="5"
                        className='review-text focus:outline-none'
                        name="review"
                    />
                    <Button type="submit" size="small" className='btn '>Submit Review</Button>
                </form>
            </div>
        </>
    )
}

export default Reviews
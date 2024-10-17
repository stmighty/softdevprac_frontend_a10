"use client"
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';

interface CardProps {
    imgSrc: string;
    hospitalName: string;
    rating?: number; // Receive the current rating
    onRatingChange?: (hospitalName: string, newRating: number) => void; // Callback to handle rating changes
}

export default function Card({ imgSrc, hospitalName, rating, onRatingChange }: CardProps) {
    return (
        <InteractiveCard contentName={hospitalName}>
            <div className="w-full h-[70%] relative rounded-lg overflow-hidden">
                <Image 
                    src={imgSrc}
                    alt='Product Picture'
                    fill={true}
                    objectFit='cover'
                />
            </div>
            <div className="w-full h-[15%] align-middle p-[20px] text-center">
                {hospitalName}
            </div>
            <div className="flex justify-center items-center w-full">
                {/* Only render Rating component if rating is provided */}
                {rating !== undefined && onRatingChange && (
                    <Rating 
                    id={`${hospitalName} Rating`}
                    name={`${hospitalName} Rating`}
                    data-testid={`${hospitalName} Rating`}
                    value={rating}  // Controlled by the parent (CardPanel)
                    onChange={(event, newValue) => {
                        onRatingChange(hospitalName, newValue ?? 0); // Update the parent's state
                    }}
                    onClick={(e) => e.stopPropagation()} // Stop propagation here
                />
                )}
            </div>
        </InteractiveCard>
    );
}

/*
<Rating name="half-rating" defaultValue={2.5} precision={0.5} />
<Rating
  name="simple-controlled"
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/>

*/

/* 

*/


/*
"use client"
import styles from './card.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';
import { useState } from 'react';

interface CardProps {
    imgSrc: string;
    hospitalName: string;
}

export default function Card({ imgSrc, hospitalName }: CardProps) {
    const [value, setValue] = useState<number | null>(5); // State controlling the Rating component

    return (
        <InteractiveCard contentName={hospitalName}>
            <div className="w-full h-[70%] relative rounded-lg overflow-hidden">
                <Image 
                    src={imgSrc}
                    alt='Product Picture'
                    fill={true}
                    objectFit='cover'
                />
            </div>
            <div className="w-full h-[15%] align-middle p-[20px] text-center">
                {hospitalName}
            </div>
            <Rating 
                className="w-full justify-center h-[15%]" 
                id={`${hospitalName} Rating`}
                name={`${hospitalName} Rating`}
                data-testid={`${hospitalName} Rating`}
                value={value}  // Use the state value to control the component
                onChange={(event, newValue) => {
                    setValue(newValue);  // Update the state when the rating changes
                }}
            />
        </InteractiveCard>
    );
}

*/

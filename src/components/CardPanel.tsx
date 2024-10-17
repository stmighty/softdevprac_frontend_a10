"use client"
import { useReducer } from "react";
import Card from "./Card";
import Link from "next/link";

// Reducer to manage the Map state
// Reducer to manage the Map state for hospital ratings
function ratingReducer(state: Map<string, number>, action: { type: string; hospitalName: string; rating?: number }) {
    switch(action.type) {
        case 'updateRating': {
            const updatedState = new Map(state);
            updatedState.set(action.hospitalName, action.rating!); // Update the rating
            return updatedState;
        }
        case 'removeHospital': {
            const updatedState = new Map(state);
            updatedState.delete(action.hospitalName); // Remove the hospital
            return updatedState;
        }
        default:
            return state;
    }
}

export default function CardPanel() {
    // Initialize the state Map with hospitals and their ratings set to 0
    const initialRatings = new Map([
        ['Chulalongkorn Hospital', 0],
        ['Rajavithi Hospital', 0],
        ['Thammasat University Hospital', 0]
    ]);

    const [ratings, dispatch] = useReducer(ratingReducer, initialRatings);
    const ratingArray = Array.from(ratings);

    // Function to handle rating changes
    const handleRatingChange = (hospitalName: string, newRating: number) => {
        dispatch({ type: "updateRating", hospitalName, rating: newRating });
    };

    const handleRemoveHospital = (hospitalName: string) => {
        dispatch({ type: "removeHospital", hospitalName });
    };


    const mockHospitalRepo = [{hid:"001", name:"Chulalongkorn Hospital", image:"/img/chula.jpg"},
                         {hid:"002", name:"Rajavithi Hospital", image:"/img/rajavithi.jpg"},
                         {hid:"003", name:"Thammasat University Hospital", image:"/img/thammasat.jpg"}
                        ]

    return (
        <div>
            <div style={{ margin: "20px", display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                {
                    mockHospitalRepo.map((hospitalItem) => (
                        <Link href = {`/hospital/${hospitalItem.hid}`} className="w-1/5">
                            <Card 
                                key={hospitalItem.hid}  // Add key to avoid warnings
                                hospitalName={hospitalItem.name} 
                                imgSrc={hospitalItem.image} 
                                rating={ratings.get(hospitalItem.name) ?? 0}  // No need for || 0 since all ratings are present
                                onRatingChange={handleRatingChange}  // Pass the onRatingChange function
                                data-testid={hospitalItem.name} 
                            />
                        </Link>
                    ))
                }
            </div>
            <div>
                <b>Hospital List with Ratings : {ratingArray.length}</b>
                {ratingArray.map(([hospitalName, rating]) => (
                    <div key={hospitalName} data-testid={hospitalName} onClick={() => handleRemoveHospital(hospitalName)}>
                        {hospitalName} - Rating: {rating}
                    </div>
                ))}
            </div>
        </div>
    );
}

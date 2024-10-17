/* javascript object for css inline styling
export default function Booking() {
    return (
        <div style={{ marginTop: '100px', textAlign: "center"}}>
            Vaccine Booking
        </div>
    );
}
*/ 


/* tailwindcss */
import DateReserve from "@/components/DateReserve";
import TextField from '@mui/material/TextField';
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

export default async function Reservations() {

    const session = await getServerSession(authOptions);
    // Initialize profile data to be null initially
    let profile = null;

    if(session && session.user?.token) {
        profile = await getUserProfile(session.user.token);
        console.log("session is", session)
        console.log("session.user is", session.user)
        console.log(2)
        console.log("profile is", profile);
    }
    
    

    return (
        
        
        <main className="w-[100%] flex flex-col items-center space-y-4">
            {/* Conditional rendering based on session */}
            {
                session && session.user?.token ? (
                    <table className="table-auto border-separate border-spacing-2 bg-gray-200 rounded-2xl">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{profile.data.name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{profile.data.email}</td>
                            </tr>
                            <tr>
                                <td>Tel.</td>
                                <td>{profile.data.tel}</td>
                            </tr>
                            <tr>
                                <td>Created At</td>
                                <td>{profile.data.createdAt}</td>
                            </tr>
                            
                        </tbody>
                    </table>
                ) : (
                    <h1>No session</h1>
                )
            }

            <div className="text-xl font-medium">
                New Reservation
            </div>


            <div className="w-fit space-y-2 items-center">

                <div className="text-md text-left text-gray-600">Name-Surname</div>
                <TextField id="standard-basic" label="Name-Lastname" variant="standard" name="Name-Lastname"/>

                <div className="text-md text-left text-gray-600">Citizen ID</div>
                <TextField id="standard-basic" label="Citizen ID" variant="standard" name="Citizen ID"/>

                <div className="text-md text-left text-gray-600">Reservation Date and Location</div>
                <DateReserve></DateReserve>
            </div>

            

            <button name="Book Vaccine" className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm">Book Vaccine</button>
        </main>
    );
}

/*
<div className="w-fit flex flex-col items-center space-y-2">
    <div className="text-md text-left text-gray-600">Name-Surname</div>
    <TextField id="standard-basic" label="Name-Lastname" variant="standard" name="Name-Lastname"/>

    <div className="text-md text-left text-gray-600">Citizen ID</div>
    <TextField id="standard-basic" label="Citizen ID" variant="standard" name="Citizen ID"/>

    <div className="text-md text-left text-gray-600">Reservation Date and Location</div>
    <DateReserve></DateReserve>
</div>

*/


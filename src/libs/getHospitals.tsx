export default async function getHospitals() {
    try {
        await new Promise( (resolve)=> {
            setTimeout(resolve, 1000)
        })

        const response = await fetch(`https://softdevprac-backend-vaccine-a09-2567-ipds.vercel.app/api/v1/hospitals`);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch hospital data. Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching hospital data:", error);
        throw error;  // Re-throw the error so it's handled upstream.
    }
}





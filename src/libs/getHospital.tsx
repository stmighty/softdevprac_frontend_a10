export default async function getHospital(id: string) {
    try {
        const response = await fetch(`https://softdevprac-backend-vaccine-a09-2567-ipds.vercel.app/api/v1/hospitals/${id}`);
        
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

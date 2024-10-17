// import CardPanel from "@/components/CardPanel";
// export default function Card() {
//     return (
//         <main className="text-center p-5">
//             <h1 className="text-xl font-medium">Select the hospital</h1>
//             <CardPanel></CardPanel>
//         </main>
//     )
// }




import CardPanel from "@/components/CardPanel";
import getHospitals from "@/libs/getHospitals";
import HospitalCatalog from "@/components/HospitalCatalog"; // Import the component with PascalCase

import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { HospitalJson } from "../../../../interface";


export default function HospitalPage() {

    const hospitals = getHospitals();
    
    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select the hospital</h1>
            <Suspense fallback={<p>Loading...<LinearProgress></LinearProgress></p>}>
                <HospitalCatalog hospitalJson={hospitals} />
            </Suspense>
        </main>
    );
}

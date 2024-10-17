// import Card from "./Card";
// import Link from "next/link";
// import { HospitalJson } from "../../interface";  // Same folder
// import {HospitalItem} from "../../interface";  


// export default async function HospitalCatalog({ hospitalJson }: { hospitalJson: HospitalJson }) {
//     const hospitalJsonReady = await hospitalJson;
//     return (
//         <>
//             Select {hospitalJsonReady.count} from the list
//             <div style={{ margin: "20px", display: "flex", flexDirection: "row", alignContent: "space-around", justifyContent: "space-around", flexWrap: "wrap" }}>
//                 {
//                     hospitalJsonReady.data.map((hospitalItem: HospitalItem) => (
//                         <Link href={`/hospital/${hospitalItem.id}`} className="w-1/5" key={hospitalItem.id}>
//                             <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.picture} />
//                         </Link>
//                     ))
//                 }
//             </div>
//         </>
//     );
// }



import Card from "./Card";
import Link from "next/link";

export default async function HospitalCatalog({ hospitalJson }: { hospitalJson: any }) {
    const hospitalJsonReady = await hospitalJson;
    return (
        <>
            Select {hospitalJsonReady.count} from the list
            <div style={{ margin: "20px", display: "flex", flexDirection: "row", alignContent: "space-around", justifyContent: "space-around", flexWrap: "wrap" }}>
                {
                    hospitalJsonReady.data.map((hospitalItem: any) => (
                        <Link href={`/hospital/${hospitalItem.id}`} className="w-1/5" key={hospitalItem.id}>
                            <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.picture} />
                        </Link>
                    ))
                }
            </div>
        </>
    );
}
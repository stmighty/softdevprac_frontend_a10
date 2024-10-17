






import Image from "next/image"
import getHospital from "@/libs/getHospital"
export default async function hospitalDetailPage({params} : {params : {hid: string}}) {


    const hospitalDetail = await getHospital(params.hid);
    console.log(hospitalDetail);

    return (
        <main className="text-center p-5">
            
            <div className="flex flex-row my-5">
                <Image src={hospitalDetail.data.picture} 
                       alt = 'Product picture'
                       width = {0}
                       height = {0}
                       sizes = "100vw"
                       className="rounded-lg w-[30%] bg-black"
                />
                <div className="text-md mx-5 text-left">
                    <div className="text-md mx-5">{hospitalDetail.data.name}</div>
                    <div className="text-md mx-5">address : {hospitalDetail.data.address}</div>
                    <div className="text-md mx-5">district : {hospitalDetail.data.district}</div>
                    <div className="text-md mx-5">province : {hospitalDetail.data.province}</div>
                    <div className="text-md mx-5">postalcode : {hospitalDetail.data.postalcode}</div>
                    <div className="text-md mx-5">{hospitalDetail.data.tel}</div>
                </div>
            </div>
        </main>
    )
}






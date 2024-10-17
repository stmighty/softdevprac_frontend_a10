"use client"
import styles from './banner.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function Banner () {

    const router = useRouter();
    const [index, setIndex] = useState(0);
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg']

    const {data : session} = useSession();

    return (
        <div className={styles.banner} onClick={() => setIndex(index+1)}>
            {
                session?
                <h1 className='px-2 py-2 m-2 rounded z-30 absolute top-0 right-0'>hello {session.user?.name}</h1>
                : null
            }

            <Image src={covers[index%4]}
            alt = 'cover'
            fill = {true}
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1>Vaccine Service Center</h1>
                <h3>Protect Your Well-being, Vaccinate with Confidence</h3>
            </div>


            <button className='bg-white text-cyan-600 border-cyan-600 font-semibold px-2 py-2 m-2 rounded z-30 absolute bottom-0 right-0
                                hover:bg-cyan-600 hover:text-white hover:border-transparent'
                                onClick={(e) => {e.stopPropagation; e.preventDefault(); router.push('/hospital');}}
                                >
                Select Your Hospital
            </button>
        </div>
    )
}





/* 
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';

export default function TopMenu() {
    return (
        <div className="fixed top-0 left-0 right-0 z-30 flex justify-end items-center bg-white h-12"> 
            <div className="w-1/5 flex justify-end items-center"> 
                <TopMenuItem title="Menu Item Booking" pageRef='/booking' />
            </div>
            <div className="w-1/10 flex justify-end items-center pr-2"> 
                <Image src={'/img/logo.jpg'} alt='logo' width={40} height={40} /> 
            </div>
        </div>
    );
}
*/



import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import {Link} from '@mui/material';

export default async function TopMenu() {
    const session = await getServerSession(authOptions);
    return (
        <>
                <div className="fixed top-0 left-0 right-0 z-30 bg-white h-12 flex justify-end">
                    <div className='flex items-center absolute left-0 h-full px-2 text-cyan-600 text-sm'>
                        {
                            session?
                            <Link href="/api/auth/signout">
                                Sign-out of {session.user?.name}
                            </Link> :
                            <Link href="/api/auth/signin">
                                Sign-in
                            </Link>
                        }
                    </div>
                    <div className="w-1/5 flex justify-end">
                        <TopMenuItem title="Menu Item Booking" pageRef='/booking' />
                    </div>
                    <div className="w-1/12 flex justify-end relative">
                        <div className="relative w-full h-full">
                            <Image
                                src={'/img/logo.jpg'}
                                alt='logo'
                                layout="fill"
                                objectFit="cover"
                                className="absolute inset-0"
                            />
                        </div>
                    </div>
                </div>
                <div className="h-12"></div> {/* Spacer div to push content down */}
            
        </>
    );
}




/* <Image src={'/img/logo.jpg'} alt='logo' layout="fill" objectFit="contain" className="h-full" /> */


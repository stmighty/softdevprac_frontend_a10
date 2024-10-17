// create session provider which use context from client so we need to use "use client"

// สร้าง session provider ที่ไปครอบตัว child
// เดี๋ยวเค้าต้องไปครอบคนอื่น

/* 
export default function NextAuthProvider({children, session}: {children:React.ReactNode, session: any}): React.ReactNode {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}
*/ 

"use client"
import { SessionProvider } from "next-auth/react";

interface NextAuthProviderProps {
    children: React.ReactNode;
    session: any;  // You can refine this to a more specific type later
}

export default function NextAuthProvider({children, session}: NextAuthProviderProps): React.ReactNode {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}
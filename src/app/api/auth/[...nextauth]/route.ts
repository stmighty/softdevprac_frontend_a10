import NextAuth from "next-auth";
import { authOptions } from "./authOptions"; // Correct import path

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; // No need to export authOptions here
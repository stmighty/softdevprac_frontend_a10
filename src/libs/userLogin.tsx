export default async function userLogin(userEmail:string, userPassword:string){
    const response = await fetch("https://softdevprac-backend-vaccine-a09-2567-ipds.vercel.app/api/v1/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: userEmail,
            password: userPassword
        })
    })

    console.log("response is :", response)

    if(!response.ok) {
        throw new Error("Failed to login")
    }

    return await response.json()

}
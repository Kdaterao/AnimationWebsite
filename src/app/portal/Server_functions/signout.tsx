import { signOut } from "next-auth/react"


export default async function Signout() {

    await signOut( {callbackUrl: "/"});

}

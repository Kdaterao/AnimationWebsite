import Signin_page from './portalpages/signin_page'
import { getServerSession } from "next-auth/next"
import Portal_page from './portalpages/portal_page'

export default async function Component() {

  const session = await getServerSession();
  
 
  if (session) {
    return (
      <Portal_page session={session}/>
    )
  } else  {
  return (
    <Signin_page/>
  )
}
};








'use client'

import Link from 'next/link'

function Signin_page(){
 
    
    return (
        <div className ='h-screen flex flex-col gap-7 justify-center'>
            <div className ='w-screen flex flex-row justify-center'>
                <h3 className='text-6xl font-bold'>You need to sign in</h3>
            </div>
            <div className ='w-screen flex flex-row justify-center'>
                <Link href ='/'  className ='rounded-xl w-20 md:w-35 md:p-3  bg-[var(--color-variableblue)] hover:bg-[var(--color-variablebluedark)] font-bold  text-sm md:text-base hover:-translate-y-2 shadow-2xl'>Go Home</Link>
                <Link href ='/api/auth/signin' className ='rounded-xl w-20 md:w-35 md:p-3  bg-[var(--color-variableblue)] hover:bg-[var(--color-variablebluedark)] font-bold  text-sm md:text-base hover:-translate-y-2 shadow-2xl'>Signin</Link>
            </div>
        </div>
    )
}


export default Signin_page
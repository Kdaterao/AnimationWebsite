'use client'
import {Session} from 'next-auth'
import Signout from '../Server_functions/signout'
import { SessionProvider } from "next-auth/react"
import UploadVideo from '../Server_functions/uploadvideo'

function Portal_page({session}:{session:Session}){

    return(

    <SessionProvider session = {session}>
        <div className ='h-screen flex flex-col gap-30 mt-40'>
            <div className ='w-screen ml-30'>
                <h3>You are logged in</h3>
                <button onClick = {() => Signout()} className='rounded-xl w-20 md:w-35 md:p-3  bg-[var(--color-variableblue)] hover:bg-[var(--color-variablebluedark)] font-bold  text-sm md:text-base hover:-translate-y-2 shadow-2xl'>Signout</button>
            </div>
            <div className='flex flex-col gap-10'>
                <div className ='flex flex-row justify-center'>
                    <h3>Input new Video and Image</h3>
                </div>
                <div className ='flex flex-row justify-center'>
                    <form onSubmit = {UploadVideo} className = 'flex flex-col gap-10'>
                        <label htmlFor="thumbnail">thumbnail</label>
                        <input type="file" id="thumbnail" name="thumbnail" accept=".png" required className='bg-[var(--color-variablebluedark)] w-60 rounded'/>
                        <label htmlFor="video">video</label>
                        <input type="file" id="video" name="video" accept=".mp4" required className='bg-[var(--color-variablebluedark)] w-90 rounded'/>
                        <input type="text" id='description' name='description' required className='bg-[var(--color-variablebluedark)] w-60 rounded'/>
                        <input type="text" id='title' name='title' required className='bg-[var(--color-variablebluedark)] w-60 rounded'/>
                        <button type='submit' className='bg-[var(--color-variablebluedark)] w-fit p-3 rounded-3xl hover:bg-[var(--color-variableblue)]'>Submit!</button>
                    </form>
                </div>

            </div>
        </div>
    </SessionProvider>
    )
}


export default Portal_page
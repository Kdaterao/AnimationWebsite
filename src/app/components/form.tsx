'use client'

import Tabbar from './tabbar';


function EmailForm({handlemouseformdown}:{handlemouseformdown:() => void}){


    async function handleOnSubmit(event: React.SyntheticEvent){
    event.preventDefault();

    const target = event.target as typeof event.target & {
        email:{value: string};
        personname:{value: string};
        emailparagraph:{value: string};
    };

    const result = await fetch('/api/login/resendrequest',{

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: target.email.value,
            personname: target.personname.value,
            emailparagraph: target.emailparagraph.value
        })
    }).then(r => r.json());

    console.log(result)
    }



    return (
        <div  className= ' w-75 sm:w-85 md:w-100 2md:w-125 lg:w-150 2lg:w-175 rounded-4xl pb-3 bg-[var(--color-variableblue)] self-center flex flex-col transition duration-75 hover:translate-y-2 shadow-2xl' onMouseDown = {() => handlemouseformdown}>
                <Tabbar handlemousedown = {handlemouseformdown} message = 'Contact Me'></Tabbar>
            <div>
                <form onSubmit= {handleOnSubmit} className ='flex flex-col gap-5 p-5'>
                    <div className = 'justify-center flex flex-row gap-5'>
                        <input type = 'email' name='email' placeholder ='email' className = 'bg-[var(--color-variablebluedark)] w-1/2 rounded'></input>
                        <input  type = 'string' name='personname' placeholder ='name' className='bg-[var(--color-variablebluedark)] w-1/2 rounded'></input>
                    </div>
                    <textarea  name='emailparagraph' placeholder ='paragraph'  rows={5} className ='bg-[var(--color-variablebluedark)] max-h-3/4 rounded-xl' style={{ maxHeight: '200px' }}></textarea>  
                    <button type='submit' className='bg-[var(--color-variablebluedark)] w-fit p-3 rounded-3xl'>submit!</button>
                </form>
            </div>
            <div className='flex flex-row justify-center'>
                <p className ='text-[var(--color-titletext)]'>My Email is delectablepaint@gmail.com</p>
            </div>
        </div>
    );
};


export default EmailForm;
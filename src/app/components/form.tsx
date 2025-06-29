'use client'



function EmailForm({handlemousedown_form}:{handlemousedown_form:  Function}){


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
        <div className= 'h-110 md:h-130  w-screen max-w-100 lg:max-w-200 rounded-4xl pb-3 bg-[var(--color-variableblue)] self-center flex flex-col transition duration-75 hover:translate-y-2 shadow-2xl' >
                <div className = 'flex flex-row h-7 md:h-11 lg:h-17 w-full rounded-t-4xl bg-[var(--color-variablebluedark)]' onMouseDown={() => handlemousedown_form()}>
                        <h3 className = 'bg-[var(--color-variablepurple)] text-white  duration-1000 text-3xl sm:text-4.5xl md:text-5xl lg:text-7xl basis-2/3 rounded-tl-full rounded-r-full rounded-br-2xl indent-11 md:indent-12-tracking-tighter font-browserwindow overflow-clip'>Contact Me!</h3>
                        <div className ='h-full basis-1/3 flex flex-row justify-end gap-3'>
                            <div className ='h-full basis-1/3  flex flex-row-reverse gap-3'>
                                <div className='w-5 h-full'></div>
                                <img src = 'x.png' className='hover:bg-black  h-2/3'/>
                                <img src = 'square.png' className='hover:bg-black  h-2/3'/>
                                <img src = '-.png' className='hover:bg-black h-2/3'/>
                            </div>
                        </div>
                </div>
                <div className ='h-0.25 w-1/2 bg-white'></div>
            <div className = 'h-7 md:h-11 lg:h-17 w-full bg-[var(--color-variablepurple)]'  onMouseDown={() => handlemousedown_form()}/>
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
        </div>
    );
};


export default EmailForm;
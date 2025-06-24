
'use client'
function EmailForm(){


async function handleOnSubmit(event: React.SyntheticEvent){
event.preventDefault();

const target = event.target as typeof event.target & {
    email:{value: string};
    personname:{value: string};
    emailparagraph:{value: string};
};

const result = await fetch('/api/login',{

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
    <div className= 'h-100 w-100 bg-amber-800'>
        <form onSubmit= {handleOnSubmit}>
            <input type = 'email' name='email' placeholder ='email'></input>
            <input  type = 'string' name='personname' placeholder ='name'></input>
            <input type ='string' name='emailparagraph' placeholder ='paragraph'></input>
            <button type='submit' className='bg-amber-200 h-10 w-10'></button>
        </form>
    </div>
);
};


export default EmailForm;
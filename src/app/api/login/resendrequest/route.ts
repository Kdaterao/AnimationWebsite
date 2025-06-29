import {EmailTemplate} from './emailtemplate';
import {Resend} from 'resend';

const resend = new Resend(String(process.env.RESEND_API_KEY));



export async function POST(request:Request) {

    const {email, personname, emailparagraph} :{email:string, personname:string, emailparagraph:string} = await request.json() ;
    console.log(email+personname+emailparagraph);
    try{
        const {data,error} = await resend.emails.send(
            {
                from:'akdaterao@gamil.com',
                to:['delectablepaint@gmail.com'],
                subject:'business inquiry',
                react: EmailTemplate({Name:personname, Body:emailparagraph}) as React.ReactElement,
                replyTo: email,
            });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);

  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

// the if block will give us API-Errors 
// while the catch will give us unexpected errors
//For this to work you need to get a verified domain and then use it for the "from" part
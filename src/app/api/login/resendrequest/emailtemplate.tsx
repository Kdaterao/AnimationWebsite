import * as React from 'react'


interface EmailTemplateProps{
    Name: string;
    Body: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({Name, Body}) =>
(
    <div>
        <h1>Name: {Name}</h1>
        <p>{Body}</p>
    </div>

);
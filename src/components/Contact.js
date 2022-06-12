import React from "react";

export default function Contact (props){
    return(
         <div>
             <ul>
                <li>{props.name}</li>
                <li>{props.phone}</li>
                <li>{props.email}</li>
                <hr/>
             </ul>
        </div>
    )
}
/*
 const request = await fetch("http://localhost:3000/contatos/")
    .then(data => await data.json())
    .then(listaContact => contactData.map(function (cont) {
            return(
                <Contact
                    key = {cont.id} 
                    name = {cont.name}
                    phone = {cont.phone}
                    email = {cont.email}
                />
            )
        })
    )
    */
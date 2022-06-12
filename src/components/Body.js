import React, {useState, useEffect} from "react";
import ReactDOM  from "react-dom";


import Contact from "./Contact";
import contactData from "../contactData";

 export default function Body(){
     const URL = 'http://localhost:3000/contatos/'
     const [todos, setTodos] = useState([])
     const fetchApi = async () => {
        const response = await fetch(URL)
        const responseJSON = await response.json()
        setTodos(responseJSON)
     }

     useEffect(() =>{
         fetchApi()
     }, [])

     if(!todos) {
         return<>'Carrregando....'</>
        } else {
         let listaContact = []
         return(
          listaContact = todos.map( (todo) => {
              if(!todo){
                  return null
              }
              return(
                  <div>
                      <Contact 
                        key = {todo.id} 
                        name = {todo.nome}
                        phone = {todo.telefone}
                        email = {todo.email}
                      />
                  </div>     
                )
          })
         )
     }
} 


import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Ajouter, Ajouter_Async, MyStore } from './store'

export default function AjouterTache() {
    const [titre,setTitre]=useState("")
    const navigation=useNavigate();
    const btnAjouter=()=>{
        MyStore.dispatch(Ajouter({id:Math.random()  ,title:   titre ,completed:false,modification:false}))
        setTitre("");
        navigation("/Taches")
    }
    MyStore.subscribe(()=>{
        console.log(MyStore.getState());
    })

    const btnAjouterAsyn=()=>{
        MyStore.dispatch(Ajouter_Async("https://jsonplaceholder.typicode.com/todos"))
    }

  return (<>   
        <h2>Ajouter Tache</h2>
        <input type="text" onChange={(ev)=>setTitre(ev.target.value)}
        value={titre} />
        <button onClick={btnAjouter}>Ajouter</button>
        <button onClick={btnAjouterAsyn}>Ajouter Async</button>
        <Link to="/Taches">Liste des Taches</Link>

        

  </>
 
  )
}

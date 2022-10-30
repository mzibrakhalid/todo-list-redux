import React, { useState } from 'react'
import { Ajouter, MyStore } from './store'

export default function AjouterTache() {
    const [titre,setTitre]=useState("")
    const btnAjouter=()=>{
        MyStore.dispatch(Ajouter({id:Math.random()  ,title:   titre ,completed:false,modification:false}))
    }
    MyStore.subscribe(()=>{
        console.log(MyStore.getState());
    })
  return (<>   
        <h2>Ajouter Tache</h2>
        <input type="text" onChange={(ev)=>setTitre(ev.target.value)}
        value={titre} />
        <button onClick={btnAjouter}>Ajouter</button>

  </>
 
  )
}

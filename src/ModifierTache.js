import React, { useState } from 'react'
import { Modifier, MyStore } from './store'

export default function ModifierTache(props) {
    const [titre,setTitre]=useState(props.Tache.title)
    const btnValiderModif=()=>{
        const nouvelleTache={...props.Tache
                        ,title:titre
                        ,modification:false}
        MyStore.dispatch(Modifier(nouvelleTache))
    }
  return (<div style={{border:"solid black"}}>
    <div>Modifier Tache</div>
    <input type="text"  value={titre} onChange={(e)=>setTitre(e.target.value)}
        />
        <button onClick={btnValiderModif}>Valider</button>
  </div>)
}

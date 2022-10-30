import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import ModifierTache from './ModifierTache';
import Progression from './Progression';
import { Modifier, Supprimer } from './store';

export default function ListeTaches() {
   const select= useSelector(st=>st);
   const dsp=useDispatch()
   const btnSupprimer=(id)=>{
        dsp(Supprimer(id))
   }
   const btnModifier=(tache)=>{
    dsp(Modifier({...tache,modification: !tache.modification }))
}
const setCompleted=(t)=>{
    dsp(Modifier({...t,completed:!t.completed}))
}
const removeChecked=()=>{
  select.forEach(tache=>{
    if(tache.completed) dsp(Supprimer(tache.id))
  }  )  
}
  return (<>
    <h4>Liste Taches</h4>
    {select.map(tache=>
            <p key={tache.id}>
             <input type="checkbox" value={tache.completed} 
             onChange={()=>setCompleted(tache)}/>   
                {tache.title}
            <button onClick={()=>btnSupprimer(tache.id)}>Supprimer</button>
            <button onClick={()=>btnModifier(tache)}>Modifier</button>
           
           { tache.modification && <ModifierTache Tache={tache}/>} 
            </p>
    )}
    <button onClick={removeChecked}>Remove Checked</button>
    <Progression/>
  </>)
}





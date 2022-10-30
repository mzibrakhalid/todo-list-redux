import React from 'react'
import { useSelector } from 'react-redux'
export default function Progression(){
    
    const totalTaches=useSelector(state=>state.length)
    const totalTachesRealises=useSelector(state=>state.filter(el=>el.completed).length)
const Taux=totalTachesRealises*100/totalTaches;

    return    (
    <div style={{width:100,height:20,background:"red"}}>
    <div style={{width: Taux?Taux:0
        ,height:20,background:"gray"}}></div>
</div>
    )
}
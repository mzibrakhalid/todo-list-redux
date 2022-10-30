import {createStore } from "redux"
//A-Actions
//A-1 Types d'actions
export const AJOUTER_TYPE="AJOUTER";
export const SUPPRIMER_TYPE="SUPPRIMER";
export const MODIFIER_TYPE="MODIFIER";
//A-2 Createurs d'actions/Action Creators
export const Ajouter=(tache)=>{return {type:AJOUTER_TYPE,payload:tache}}
export const Modifier=(NouvelleTache)=>{return {type:MODIFIER_TYPE,payload:NouvelleTache}}
export const Supprimer=(id)=>{return {type:SUPPRIMER_TYPE,payload:id}}
//B-Reducer
/*
state=[
    {id:1,title:"manger",completed:false,Modification:false},
    {id:2,title:"Sortir",completed:false,Modification:false},
    {id:3,title:"Dormir",completed:false,Modification:false},
    {id:4,title:"Etudier",completed:false,Modification:false},
        ]
    {id:2,title:"Dormir",completed:false,Modification:true},
*/
export const rdc=(state=[],action)=>{
    switch(action.type){
        case(AJOUTER_TYPE):{return [...state,action.payload]}
        case(SUPPRIMER_TYPE):{return state.filter(tache=> tache.id!=action.payload)}
        case(MODIFIER_TYPE):{return state.map(tache=>{
            if(tache.id==action.payload.id){ return  action.payload}
            return tache 
        })}
        default: return state
    }
}
//C-Store
export const MyStore=createStore(rdc)

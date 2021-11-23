import React, { useReducer, useState } from 'react';
import { portalReducer } from '../../reducers/portalReducer';
import { portalStore } from '../../store/poralStore';

const Portal = () => {
    const [state,dispatch]=useReducer(portalReducer,portalStore);
    const [name,setName]=useState('');
    console.log(state.patients);
    return (
        <div>
            <h2>My doctors portal</h2>
            <h3>Has Patient {state.patients.length}</h3>
            <input type="text" onChange={e=>setName(e.target.value)}></input>
            <button onClick={()=>dispatch({type:'ADD_PATIENT',name})}>Add</button>
            
            <br/>
            <br/>
            {state.patients.map(patient=><li key={patient.id}>{patient.name} <button onClick={()=>dispatch({type:'REMOVE_PATIENT',id:patient.id})} key={Math.random()}>X</button></li>)}
        

            

            
        </div>
    )
};

export default Portal;
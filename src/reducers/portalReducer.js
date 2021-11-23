export const portalReducer=(state,action)=>{
    switch (action.type) {
        case 'ADD_PATIENT':
            console.log(action);
            const adding={
                name:action.name,
                id:action.name+state.patients.length
            }
            const newPatient=[...state.patients,adding]
            return {
                ...state,
                patients: newPatient
            }
            
            case 'REMOVE_PATIENT':
                const removed=state.patients.filter(patient=>patient.id!== action.id);

                
            return{
                ...state,
                patients:removed

                }
    
        default:
            return state;
           
    }
    
}
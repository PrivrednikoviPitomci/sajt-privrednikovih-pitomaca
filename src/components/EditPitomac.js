import React from 'react';


const EditPitomac = props => {
    if(props.selectedPitomac){
        return (
            <div>
                <div clasName="editfields">
                    <div>
                        <label>id: </label>
                        {props.addingPitomac
                            ? <input type = "number"
                                name = "id"
                                placeholder="id"
                                value={props.selectedPitomac.id}
                                onChange={props.onChange}
                                />
                        : <label className="value">{props.selectedPitomac.id}</label>
                        }                    
                    </div> 
                    <div>
                    <label>name: </label>
                            <input 
                                name = "name"
                                placeholder="name"
                                value={props.selectedPitomac.name}
                                onChange={props.onChange}
                            />
                        
                    </div>               
                </div>
               <button onClick={props.onCancel}>Cancel</button>
               <button onClick={props.onSave}>Save</button>
            </div>            
        );
   } else {
       return <div />; 
   }
};

export default EditPitomac;
import React, { Component } from 'react';
import Pitomac from './Pitomac';
import EditPitomac from './EditPitomac';

class Pitomci extends Component{
    constructor(){
        super();
        this.state = {pitomci:[], addingPitomac: false};
        this.handleSelect = this.handleSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel= this.handleCancel.bind(this);
        this.handleEnableAddMode= this.handleEnableAddMode.bind(this);
    }

    componentDidMount(){
        fetch('/api/pitomci').then(result=>result.json()).then(json => {
            this.setState({pitomci : json});
        });
    }

    handleEnableAddMode(){
        this.setState({
            addingPitomac : true,
            selectedPitomac: {id : '', name:''}
        });
    }

    handleSelect(pitomac){
        this.setState({selectedPitomac: pitomac});
    }
    handleSave(pitomac){
        this.setState({selectedPitomac: pitomac});
    }
    handleChange(event){
        let selectedPitomac = this.state.selectedPitomac;
        selectedPitomac[event.target.name] = event.target.value;
        this.setState({selectedPitomac: selectedPitomac});
    }
    handleCancel(){
        this.setState({selectedPitomac: null, addingPitomac : false});
    }
    render(){
        return (
            <div>
                <ul className="pitomci">
                {
                    this.state.pitomci.map(pitomac =>{
                        return <Pitomac pitomac = {pitomac} onSelect={this.handleSelect} 
                        selectedPitomac={this.state.selectedPitomac} />;
                    })
                }
                </ul>
                <div className="editArea">
                <button onClick={this.handleEnableAddMode}>Add</button>
                <EditPitomac 
                addingPitomac={this.state.addingPitomac} 
                selectedPitomac={this.state.selectedPitomac}
                onChange={this.handleChange}
                onSave={this.handleSave}
                onCancel={this.handleCancel}
                
                />
                
                </div>
            </div>
        );
    }
};  

export default Pitomci;
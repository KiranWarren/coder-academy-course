import { Component } from "react"
import BusinessCardDisplay from "./BusinessCardDisplay";
import BusinessCardForm from "./BusinessCardForm";

export default class BusinessCardParent extends Component {
    constructor(){
        super();

        this.state = {
            name: "Default Name",
            email: "example@email.com",
            editMode: false
        }
    }

    updateState = (stateKeyId, newStateValue) => {
        // Only allow changes to keys that already exist in the state
        if (Object.keys(this.state).includes(stateKeyId)) {

            if (stateKeyId === "name") {
                // add name validation
            }

            if (stateKeyId === "email") {
                // add email validation
            }

            this.setState({
                [stateKeyId]: newStateValue
            })
        } else {
            console.warn("Incorrect state key")
        }
    }

    toggleEditMode = () => {
        this.setState({editMode: !this.state.editMode})
    }

    render() {

        return(
            <div>
                {
                    this.state.editMode ?
                    <BusinessCardForm 
                        name={this.state.name} 
                        email={this.state.email}
                        updateState={this.updateState}
                    />
                    :
                    <BusinessCardDisplay name={this.state.name} email={this.state.email} />
                }
                <button onClick={this.toggleEditMode}>Toggle Edit Mode</button>
            </div>
        )
    }


    // render(){
    //     if (this.state.editMode) {
    //         return(
    //             <div>
    //                 <BusinessCardForm 
    //                     name={this.state.name} 
    //                     email={this.state.email}
    //                     updateState={this.updateState}
    //                 />
    //                 <button onClick={this.toggleEditMode}>Toggle Edit Mode</button>
    //             </div>
    //         )
    //     } else {
    //         return (
    //             <div>
    //                 <BusinessCardDisplay name={this.state.name} email={this.state.email} />
    //                 <button onClick={this.toggleEditMode}>Toggle Edit Mode</button>
    //             </div>
    //         )
    //     }      
    // }

}
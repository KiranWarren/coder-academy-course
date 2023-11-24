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

    render(){
        if (this.state.editMode) {
            return(
                <BusinessCardForm 
                    name={this.state.name} 
                    email={this.state.email}
                    updateState={this.updateState}
                    />
            )
        } else {
            return (
                <BusinessCardDisplay name={this.state.name} email={this.state.email} />
            )
        }      
    }

}
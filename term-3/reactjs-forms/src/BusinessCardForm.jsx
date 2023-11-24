import { Component } from "react";

export default class BusinessCardForm extends Component{
    constructor(props){
        super(props);
    }

    handleChangeInput = (event) => {
        this.props.updateState(event.target.name, event.target.value);
    }

    render(){
        return(
            <form>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" 
                value={this.props.name}
                onChange={this.handleChangeInput}
                />
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" 
                value={this.props.email}
                onChange={this.handleChangeInput}
                />
            </form>
        )
    }
}
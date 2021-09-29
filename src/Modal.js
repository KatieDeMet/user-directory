import React, { Component } from 'react'

export default class Modal extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            from: "",
            title: "",
            employer: "",
            movie1: "",
            movie2: "",
            movie3: ""
        }
    }

    render() {
        return (
            <div className="formContainer">
                <h3>Modal is open</h3>
                <form>
                    <label htmlFor="nameInput">Name:</label>
                    <input name="nameInput" placeholder="Text here"></input>
                    <label htmlFor="fromInput">From:</label>
                    <input name="fromInput" placeholder="Text here"></input>
                    <label htmlFor="jobInput">Job Title:</label>
                    <input name="jobInput" placeholder="Text here"></input>
                    <label htmlFor="employerInput">Employer:</label>
                    <input name="employerInput" placeholder="Text here"></input>
                    <label htmlFor="movieInput1">Favorite Movie 1:</label>
                    <input name="movieInput1" placeholder="Text here"></input>
                    <label htmlFor="movieInput2">Favorite Movie 2:</label>
                    <input name="movieInput2" placeholder="Text here"></input>
                    <label htmlFor="movieInput3">Favorite Movie 3:</label>
                    <input name="movieInput3" placeholder="Text here"></input>
                    <button onClick={this.props.closeModal}>Close</button>
                </form>
            </div>
        )
    }
}

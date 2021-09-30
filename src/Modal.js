import React, { Component } from 'react'

export default class Modal extends Component {
    

    render() {
        return (
            <div className="formContainer">
                <h3>Add a new user</h3>
                <form onSubmit={this.props.handleSubmit}>
                    <label htmlFor="nameInput">Name:</label>
                    <input id="name" name="nameInput" value={this.props.name} onChange={this.props.handleChange}></input>
                    <label htmlFor="fromInput">From:</label>
                    <input id="from" name="fromInput" value={this.props.from} onChange={this.props.handleChange}></input>
                    <label htmlFor="jobInput">Job Title:</label>
                    <input id="title" name="jobInput" value={this.props.title} onChange={this.props.handleChange}></input>
                    <label htmlFor="employerInput">Employer:</label>
                    <input id="employer" name="employerInput" value={this.props.employer} onChange={this.props.handleChange}></input>
                    <label htmlFor="movieInput1">Favorite Movie 1:</label>
                    <input id="movie1" name="movieInput1" value={this.props.movie1} onChange={this.props.handleChange}></input>
                    <label htmlFor="movieInput2">Favorite Movie 2:</label>
                    <input id="movie2" name="movieInput2" value={this.props.movie2} onChange={this.props.handleChange}></input>
                    <label htmlFor="movieInput3">Favorite Movie 3:</label>
                    <input id="movie3" name="movieInput3" value={this.props.movie3} onChange={this.props.handleChange}></input>
                    <button onClick={this.props.closeModal}>Close</button>
                    <button style={{display: "inline"}}>Submit</button>
                </form>
            </div>
        )
    }
}

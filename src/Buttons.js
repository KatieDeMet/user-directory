import React, { Component } from 'react'

export default class Buttons extends Component {


    render() {
        return (
            <div className="linkContainer">
                 {this.props.person === 0 ? <p className="buttonLink"></p> : <p className="buttonLink" onClick={this.props.handlePrev}><strong>&#8249; Previous</strong></p> }
                <div className="buttonContainer"> 
                    <button className="button" onClick={() => this.props.openModal(this.props.person)}>Edit</button>
                    <button className="button" onClick={() => this.props.handleDelete(this.props.person)}>Delete</button>
                    <button className="button" onClick={() => this.props.openModal(null)}>New</button>
                </div>
                {this.props.person === this.props.length-1 ? <p className="buttonLink"></p> : <p className="buttonLink" onClick={this.props.handleNext}><strong>Next &#8250;</strong></p>}
                
            </div>
        )
    }
}

import React, { Component } from 'react'
import Card from './Card'
import Buttons from './Buttons'

export default class CardList extends Component {

    render() {
        
        return (
            <>
                <Card data={this.props.data} person={this.props.person} length={this.props.length}  />
                <Buttons handleNext={this.props.handleNext} handlePrev={this.props.handlePrev} person={this.props.person} length={this.props.length} openModal={this.props.openModal} closeModal={this.props.closeModal} handleEdit={this.props.handleEdit} handleDelete={this.props.handleDelete} />
            </>
        )
    }
}

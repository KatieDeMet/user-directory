import React, { Component } from 'react'
import Card from './Card'
import Buttons from './Buttons'
import * as cardData from "./db.json"

export default class CardList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: cardData,
            person: 0
        }
        this.handleNext = this.handleNext.bind(this)
        this.handlePrev = this.handlePrev.bind(this)
    }

    handleNext() {
        this.setState(prev => ({person: ++prev.person}))
    }

    handlePrev() {
        this.setState(prev => ({person: --prev.person}))
    }


    render() {
        const length = this.state.data.default.length
        return (
            <>
                <Card data={this.state.data} person={this.state.person} length={length}  />
                <Buttons handleNext={this.handleNext} handlePrev={this.handlePrev} person={this.state.person} length={length} openModal={this.props.openModal} closeModal={this.props.closeModal} />
            </>
        )
    }
}

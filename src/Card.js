import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        const data = this.props.data
        const person = this.props.person
        return (
            <div className="card">
                <p className="cardIndex">{`${person+1}/${this.props.length}`}</p>
                <h2>{data[person].name}</h2>
                <p><strong>From:</strong> {data[person].from}</p>
                <p><strong>Job Title:</strong> {data[person].title}</p>
                <p><strong>Employer:</strong> {data[person].employer}</p>
                <p><strong>Favorite Movies:</strong></p>
                <ol>
                    {data[person].movies.map((movie, i) => {
                           return <li key={i}>{movie}</li>
                       })}
                </ol>
            </div>
        )
    }
}

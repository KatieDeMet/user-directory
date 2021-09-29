import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        console.log(this.props.data)
        const data = this.props.data.default
        const person = this.props.person.toString()
        return (
            <div className="card">
                <p className="cardIndex">{`${data[person].id}/${this.props.length}`}</p>
                <h2>{data[person].name}</h2>
                <p><strong>From:</strong> {data[person].from}</p>
                <p><strong>Job Title:</strong> {data[person].title}</p>
                <p><strong>Employer:</strong> {data[person].employer}</p>
                <p><strong>Favorite Movies:</strong></p>
                <ol>
                    {data[person].movies.map((movie, i) => {
                        //    console.log(movies)
                           return <li key={i}>{movie}</li>
                       })}
                </ol>
            </div>
        )
    }
}

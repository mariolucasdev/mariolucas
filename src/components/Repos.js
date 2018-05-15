import React, { Component } from 'react';

export default class Repos extends Component {
    render() {
        return (
            <div className="Repo">
                <a href={this.props.repo.html_url} target="_blank">
                    <h3>{this.props.repo.name}</h3>
                    <p>{this.props.repo.language}</p>
                </a>
            </div>
        )
    }
}
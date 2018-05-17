import React, { Component } from 'react';
import './Repos.css';

export default class Repos extends Component {
    state = {
        repos: []
    }

    componentDidMount() {
        this.setState({repos : this.props.repos});
    }

    language = lang => (lang === "JavaScript" && "JS") || lang;

    render() {
        const {repos} = this.state;

        return (
            <div className="Repos-list">
                {repos.map(repo => 
                    <div className="Repo" key={repo.id}>
                        <a target='_blank' href={repo.html_url} >
                            <h2>{this.language(repo.language)}</h2>
                            <p>{repo.name}</p>
                        </a>
                    </div>
                )}
            </div>
        )
    }
}
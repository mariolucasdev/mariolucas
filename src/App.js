import React, { Component } from 'react';
import axios from 'axios';
import About from './components/About';
import Repos from './components/Repos';
import Contact from './components/Contact';

import './App.css';

class App extends Component {

  state = {
    user: [],
    repos: [],
    page: ""
  }

  getUserData = () => axios.get('https://api.github.com/users/mariolucasdev');
  getUserRepos = () => axios.get('https://api.github.com/users/mariolucasdev/repos');

  componentDidMount() {
    axios.all([this.getUserData(), this.getUserRepos()])
      .then(axios.spread((user, repos) => this.setState({user: user.data, repos: repos.data})))
  }

  handleClick = e => this.setState({ page: e.target.value});

  selectPage(page) {
    if(page === "repos") {
      return <Repos repos={this.state.repos}/>;
    } else if(page === "contact"){
      return <Contact />;
    } else {
      return <About />;
    }
  }
  render() {
    const {page} = this.state;

    return (
      <div className="App">
        <div className="Content-profile">
          <div className="Profile">
              <img src={this.state.user.avatar_url} alt={this.state.user.name}/>
          </div>
          <div className="Info">
            <h1>{this.state.user.name}</h1>
            <p>{this.state.user.bio}</p>
            <div className="icons">
              <a rel="noopener noreferrer" href="https://www.linkedin.com/in/mario-lucas-de-oliveira-regis-65b369106/" target="_blank"><div className="in"></div></a>
              <a rel="noopener noreferrer" href={this.state.user.html_url} target="_blank"><div className="git"></div></a>
              <a rel="noopener noreferrer" href="" target="_blank"><div className="cv"></div></a>
            </div>

            <div className="menu">
              <button value="about" onClick={this.handleClick}>About</button>
              <button value="repos" onClick={this.handleClick}>Repositories</button>
              <button value="contact" onClick={this.handleClick}>Contact</button>
            </div>
          </div>
        </div>

        <div className="Content-info">
          {this.selectPage(page)}
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';
import Repos from './components/Repos';
import './App.css';

class App extends Component {

  state = {
    user: [],
    repos: []
  }

  getUserData = () => axios.get('https://api.github.com/users/mariolucasdev');
  getUserRepos = () => axios.get('https://api.github.com/users/mariolucasdev/repos');

  componentDidMount() {
    axios.all([this.getUserData(), this.getUserRepos()])
      .then(axios.spread((user, repos) => this.setState({user: user.data, repos: repos.data})))
  }

  render() {
    return (
      <div className="App">
        <div className="Content-profile">
          <div className="Profile">
              <img src={this.state.user.avatar_url} alt={this.state.user.name}/>
          </div>
          <div className="Info">
            <h1>{this.state.user.name}</h1>
            <p>{this.state.user.bio}</p>
          </div>
          <div className="Skills">
            <h2>Skills</h2>
            <p>HTML</p>
            <p>CSS</p>
            <p>JAVASCRIPT</p>
            <p>PHP</p>
            <p>REACT JS</p>
          </div>
          <div className="Contact">
            <h2>Contact</h2>
            <p>mariolucasdev@gmail.com</p>
            <p><a href="github.com/mariolucasdev">GITHUB</a></p>
            <p><a href="https://www.linkedin.com/in/mario-lucas-de-oliveira-regis-65b369106/">LINKEDIN</a></p>
          </div>
        </div>
      
        <div className="Content-info">
          <div className="About">
            <h1>About me</h1>
            <p>My name is Mario Lucas I am 23 years old. I am passionate about technology and programming student for 3 years. My goal is yours is a software engineer, I currently play with JavaScript, PHP, HTML and CSS. I am studying higher education in analysis and development of systems and the Nanodegree Developer React of Udacity.</p>
          </div>
          <div className="Repos-list">
              <h1>My Repositories</h1>
              {this.state.repos.map(r => <Repos key={r.id} repo={r} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

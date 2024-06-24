import { useState } from 'react'
import { useEffect } from 'react'
import profile from './assets/profile.jpg'
import githubIcon from './assets/github-logo.png'
import linkedinIcon from './assets/linkedin-logo.png'
import resumeIcon from './assets/resume-logo.png'
import goodreadsIcon from './assets/goodreads-logo.png'
import stravaIcon from './assets/strava-logo.png'
import './App.css'

function repoCard(name, modified, collaborators, url) {
  this.name = name;
  this.modified = modified;
  this.collaborators = collaborators;
  this.url = url;
}

function App() {
  const [count, setCount] = useState(0);

  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/brooklyn204/repos", {
      "headers": {
          'X-GitHub-Api-Version': '2022-11-28'
      },
      "method": "GET"
    }).then(response => response.json())
    .then(repos => {
      console.log(repos);
      var cards = [];
      for (var i in repos) {
        let card = new repoCard(repos[i].name,repos[i].updated_at,null,repos[i].html_url);
        cards.push(card);
      } 
      setRepos(cards)});
   }, []);

  return (
    <>
    <div className="block one">
      <div className="left">
        <div className="header">
          <img src={profile} className="profile_pic" alt="Profile picture" />
          <div className="text_stack">
            <h1>Brooklyn</h1>
            <h1>Cooper</h1>
          </div>
        </div>
        <div className="body">
          <ul>
            <li>CS Student @ UMN</li>
            <li>Intern @ Microsoft and Garmin</li>
            <li>Backend dev</li>
            <li>Cloud solutions enthusiast</li>
            <li>Cross-disciplinary communicator</li>
            <li>Runner, bookworm and sci-fi nerd</li>
          </ul>
        </div>
      </div>
      <div className="center">

      </div>
      <div className="right">
        <a className="connection" href="https://github.com/brooklyn204">
          <img src={githubIcon} className="icon" alt="Github icon"/>
          <h3>GitHub</h3>
        </a>
        <a className="connection" href="https://www.linkedin.com/in/brooklyn-cooper-43aba4251/">
          <img src={linkedinIcon} className="icon" alt="LinkedIn icon"/>
          <h3>LinkedIn</h3>
        </a>
        <a className="connection" href="BrooklynCooperResume.pdf" download>
          <img src={resumeIcon} className="icon" alt="Resume icon"/>
          <h3>Resume</h3>
        </a>
        <a className="connection" href="https://www.goodreads.com/user/show/135269773-brooklyn">
          <img src={goodreadsIcon} className="icon" alt="Goodreads icon"/>
          <h3>GoodReads</h3>
        </a>
        <a className="connection" href="https://www.strava.com/athletes/123785873">
          <img src={stravaIcon} className="icon" alt="Strava icon"/>
          <h3>Strava</h3>
          </a>
      </div>
    </div>
    <div className="block">
      <div className="two">
        <div className="header">
          <h2>Recent Projects</h2>
        </div>
        <div className="scroll">
          {repos.map((card) => {
            return (
              <a className="repo" href={card.url}>
                <h3>{card.name}</h3>
                <br/>
                <p className="info">{card.modified}</p>
              </a>)
          })}
        </div>
      </div>
    </div>
    <div className="block three">
      <div className="left">
        <div className="header">
          <h2>What I'm listening to</h2>
        </div>
        <div className="body">
          <ul>
            <li>CS @ UMN</li>
            <li>Intern @ Microsoft and Garmin</li>
            <li>Backend dev</li>
            <li>Cloud solutions enthusiast</li>
            <li>Cross-disciplinary communicator</li>
            <li>Runner, bookworm and sci-fi nerd</li>
          </ul>
        </div>
      </div>
      <div className="center"></div>
      <div className="right">
        <div className="header">
          <h2>My runs</h2>
        </div>
        <div className="body">
          <ul>
            <li>CS @ UMN</li>
            <li>Intern @ Microsoft and Garmin</li>
            <li>Backend dev</li>
            <li>Cloud solutions enthusiast</li>
            <li>Cross-disciplinary communicator</li>
            <li>Runner, bookworm and sci-fi nerd</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="block four">
      <div className="left">
        <div className="header">
          <h2>Conversation starters and other tidbits</h2>
        </div>
        <div className="body">
          <img src={profile} className="profile_pic" alt="Profile picture" />
          <img src={profile} className="profile_pic" alt="Profile picture" />
          <img src={profile} className="profile_pic" alt="Profile picture" />
          <img src={profile} className="profile_pic" alt="Profile picture" />
        </div>
      </div>
    </div>
    <div className="block five">
      <div className="left">
        <div className="header">
          <h2>You made it to the end! have a fun game.</h2>
        </div>
        <div className="body">
          <img src={profile} className="profile_pic" alt="Profile picture" />
          <img src={profile} className="profile_pic" alt="Profile picture" />
          <img src={profile} className="profile_pic" alt="Profile picture" />
          <img src={profile} className="profile_pic" alt="Profile picture" />
        </div>
      </div>
    </div>
    </>
  )
}

export default App

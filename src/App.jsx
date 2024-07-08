import { useState } from 'react'
import { useEffect } from 'react'
import { Octokit } from "https://esm.sh/@octokit/core"
import profile from './assets/profile.jpg'
import githubIcon from './assets/github-logo.png'
import linkedinIcon from './assets/linkedin-logo.png'
import resumeIcon from './assets/resume-logo.png'
import goodreadsIcon from './assets/goodreads-logo.png'
import stravaIcon from './assets/strava-logo.png'
import secrets from './assets/secrets.json'
import './App.css'

function repoCard(name, date, collaborators, url) {
  this.name = name;
  this.date = date;
  this.collaborators = collaborators;
  this.url = url;
}

function App() {
  const [count, setCount] = useState(0);

  const [repos, setRepos] = useState([]);

  // Object for use with getting from github API
  const octokit = new Octokit({
    auth: secrets.github_auth_token
  });
  // Async function to get collaborator data for given repo and build card from it and other repo data
  const getcard = async (repo) => {
    const response = await octokit.request('GET /repos/{owner}/{repo}/collaborators', {
        owner: 'brooklyn204',
        repo: repo.name,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
          'User-Agent': 'brooklyn204'
        }
      });
      
      const data = await response.data;
      let collaborators = [];
      console.log("length:" + data.length)
      for (let i = 0; i < data.length; i++) {
        collaborators.push(data[i].avatar_url);
      }
      console.log("collabs: "+collaborators)
      let card = new repoCard(repo.name,repo.created_at,collaborators,repo.html_url);
      return card;
  }
  useEffect(() => {
    // Async function to fetch data from github api and build cards from it
    const getCardData = async () => {
      // Get data from API
      const response = await octokit.request('GET /users/{username}/repos', {
        username: 'brooklyn204',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });
      console.log("should do this AFTER repos request completed");
      // If request completed successfully, build and set cards, otherwise return empty list
      var cards = [];
      if (response.status == 200) {
        let repositories = await response.data;
        console.log("good status, got repositories "+repositories);
        for (let r=0; r < repositories.length; r++) {
          let card = await getcard(repositories[r]);
          console.log("this is for card "+repositories[r].name+". Got this card: "+card);
          cards.push(card);
        }
        console.log("done with pushing cards");
      } else {
        console.log("bad status");
      }
      console.log(cards);
      cards.sort(function(card1, card2) {
        return card1.date < card2.date;
    });
      setRepos(cards);
    };
    // Call async function
    console.log("before calling async");
    getCardData();
    console.log("after calling async");
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
                <div className="repo_meta">
                  <p className="repo_date">{card.date}</p>
                  {card.collaborators.map(collaborator => {
                    return (
                    <img className="githubPP" src={collaborator}/>
                  )
                  })}
                </div>
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

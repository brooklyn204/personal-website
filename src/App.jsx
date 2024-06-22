import { useState } from 'react'
import profile from './assets/profile.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
            <li>CS @ UMN</li>
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
        <div className="connection"><a href="https://github.com/brooklyn204">GitHub</a></div>
        <div className="connection"><a href="https://www.linkedin.com/in/brooklyn-cooper-43aba4251/">LinkedIn</a></div>
        <div className="connection"><a href="BrooklynCooperResume.pdf" download>Resume</a></div>
        <div className="connection"><a href="https://www.goodreads.com/user/show/135269773-brooklyn">GoodReads</a></div>
        <div className="connection"><a href="https://www.strava.com/athletes/123785873">Strava</a></div>
      </div>
    </div>
    <div className="block two">
      <div className="left">
        <div className="header">
          <h2>Recent Projects</h2>
        </div>
        <div className="body">
          <img src={profile} className="profile_pic" alt="Profile picture" />
          <img src={profile} className="profile_pic" alt="Profile picture" />
          <img src={profile} className="profile_pic" alt="Profile picture" />
          <img src={profile} className="profile_pic" alt="Profile picture" />
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

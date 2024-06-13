import { useState } from 'react'
import profile from './assets/profile.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="block">
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
      <div className="right">
        <a href="wikipedia.org">GitHub</a>
        <a href="wikipedia.org">LinkedIn</a>
        <a href="wikipedia.org">Resume</a>
        <a href="wikipedia.org">GoodReads</a>
        <a href="wikipedia.org">Strava</a>
      </div>
    </div>
    </>
  )
}

export default App

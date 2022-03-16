import React from 'react'
import { OctocatComponent } from './components/Octocat'

export function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="45"
                  height="45"
                  alt="GithubLogo"
                />
              </a>
            </li>
            <li>
              <a className="octo" href="#">
                Octodex
              </a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="https://octodex.github.com/faq/">FAQ</a>
            </li>
          </ul>
        </nav>

        <nav className="TwoHeader">
          <ul>
            <li>
              <a className="twitter" href="https://twitter.com/githubdesign">
                RSS
              </a>
            </li>
            <li className="back">
              <a className="backlink" href="https://github.com/">
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <OctocatComponent id="49" title="test" />
    </div>
  )
}

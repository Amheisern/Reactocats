import React from 'react'
import { OctocatComponent } from './components/Octocat'
import octocats from './octocats.json'

export function App() {
  // console.log('Octo')

  const OctosFromData = octocats.map((octocat) => (
    <OctocatComponent
      number={otocat.number}
      name={otocat.name}
      image={otocat.image}
      link={otocat.link}
    />
  ))
  // console.log('OctoFromData')
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
      <section>{OctosFromData}</section>
      <OctocatComponent id="49" title="test" />
    </div>
  )
}

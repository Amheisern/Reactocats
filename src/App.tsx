import React from 'react'
import { OctocatComponent } from './components/OctocatComponent'
import octocats from './octocats.json'
import './index.scss'

export function App() {
  // console.log('Octo')

  const OctosFromData = octocats.map((octocat) => (
    <OctocatComponent
      key={octocat.number}
      number={octocat.number}
      name={octocat.name}
      image={octocat.image}
      link={octocat.link}
      authorLink={octocat.authors[0].link}
      authorImage={octocat.authors[0].image}
      // {octocat.authors.map(({ link, image }) => author.image)}
      // {octocat.authors.map((author) => {
      //   [author.link, author.image]
      // })}
    />
  ))
  console.log('octocats', octocats)
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
    </div>
  )
}

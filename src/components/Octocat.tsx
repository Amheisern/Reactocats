import React from 'react'

type OctocatComponentProps = {
  id: string
  title: string
}
export function OctocatComponent(props: OctocatComponentProps) {
  return (
    <article>
      <a href="https://octodex.github.com//terracottocat/">
        <img
          src="https://octodex.github.com//images/Terracottocat_Single.png"
          width="400"
          height="400"
          alt="Terracottocat"
        />
      </a>
      <ul>
        <li>
          #149:
          <a href="https://octodex.github.com//terracottocat/">
            <strong>{props.title}</strong>
          </a>
        </li>
        <li>
          <a href="https://github.com/chubbmo">
            <img
              src="https://github.com/chubbmo.png"
              width="24px"
              height="24px"
              alt="chubbmo"
            />
          </a>
        </li>
      </ul>
    </article>
  )
}

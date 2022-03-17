import React from 'react'

type OctocatComponentProps = {
  number: number
  name: string
  image: string
  link: string
  author: object[{ link: string; image: string }]
}
export function OctocatComponent(props: OctocatComponentProps) {
  return (
    <article>
      <a href={props.link}>
        <img src={props.image} width="400" height="400" />
      </a>
      <ul>
        <li>
          {props.number}
          <a href={props.link}>
            <strong>{props.name}</strong>
          </a>
        </li>
        <li>
          <a href={props.author}>
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

import * as React from 'react'
import css from './Hello.module.css'

type HelloProps = {}

const Hello: React.FC<HelloProps> = (props) => {
  return <div className={css.hello}>
    hello
  </div>
}

export default Hello

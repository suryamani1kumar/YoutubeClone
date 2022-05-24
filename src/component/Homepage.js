import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div className='home'>
      <h1>Hello</h1>
      <div>
        <span>visit youtube click here </span>
        <Link to='/Header'>
        <button>youtube</button>
        </Link>
      </div>

    </div>
  )
}

export default Homepage
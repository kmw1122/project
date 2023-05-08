import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/Login">로그인</Link> | <Link to="/Register">회원가입</Link>
      </nav>
    </div>
  )
}

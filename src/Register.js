import React from 'react'

export default function Register() {
  return (
    <div className="page">
      <div className="titleWrap">회원가입</div>

      <div className="contentWrap">
        <div className="inputTitle">이름</div>
        <div className="inputWrap">
          <input className="input" />
        </div>

        <div className="inputTitle">이메일 주소</div>
        <div className="inputWrap">
          <input className="input" />
        </div>

        <div className="inputTitle">비밀번호</div>
        <div className="inputWrap">
          <input className="input" />
        </div>

        <div className="inputTitle">비밀번호 확인</div>
        <div className="inputWrap">
          <input className="input" />
        </div>

        <div className="inputTitle">닉네임</div>
        <div className="inputWrap">
          <input className="input" />
        </div>
      </div>

      <div>
        <button className="bottomButton">회원가입</button>
      </div>
    </div>
  )
}

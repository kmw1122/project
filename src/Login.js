import React from 'react'

export default function Login() {
  return (
    <div className="page">
      <div className="titleWrap">
        이메일과 비밀번호를
        <br />
        입력해주세요
      </div>

      <div className="contentWrap">
        <div className="inputTitle">이메일 주소</div>
        <div className="inputWrap">
          <input className="input" placeholder="test@gmail.com" />
        </div>

        <div className="inputTitle">비밀번호</div>
        <div className="inputWrap">
          <input
            className="input"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상 입력해주세요."
          />
        </div>
      </div>

      <div>
        <button className="bottomButton">확인</button>
      </div>
    </div>
  )
}

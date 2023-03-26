import './signup.css'
import { useRef } from "react";

const JoinForm = () => {

    const memberType = useRef();

    return (
        <form action="http://localhost:8086/member" method="post">
            <label for="inputType">회원 유형</label> 
            <div class="inline-flex">
                <input ref={memberType} type="radio" name="type" value="개발자" />개발자<br />
                <input ref={memberType} type="radio" name="type" value="사업자" />사업자<br />
                <input ref={memberType} type="radio" name="type" value="작업자" />작업자<br />
                <input ref={memberType} type="radio" name="type" value="기술자" />기술자
            </div>
            <br />
            <label for="inputId">아이디</label>
            <input type="text" name="id" placeholder="사업자등록번호 입력"/>
            <br />
            <label for="inputPw">비밀번호</label>
            <input type="password" name="password" placeholder="비밀번호 입력"/>
            <br />
            <label for="inputName">이름</label>
            <input type="text" name="name" placeholder="이름 입력"/>
            <br />
            <input type="submit" value="가입하기" />



        </form>
    );
}

export default JoinForm;
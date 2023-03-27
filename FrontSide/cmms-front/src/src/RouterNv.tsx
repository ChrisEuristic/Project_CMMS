import * as React from 'react';
import { useNavigate } from "react-router-dom";


const RouterNv = () => {
    
    const navigator = useNavigate();

    const goUrl = (url: string) => {
        navigator(url);
    }


    return (
        <>
        <button onClick={()=>navigator("/")}>홈으로 이동</button>
        <button onClick={()=>navigator("/member")}>1페이지로 이동</button>
        </>
    );
}

export default RouterNv;
import { useRecoilValue } from "recoil";
import { SideBar } from "../../component/sidebar";
import './index.scss';
import { state } from "../../recoil/Atom";

export function Question() {

    const link = useRecoilValue(state);

    console.log(link);

    return (
        <div className="container">
            <SideBar />
            <div className="main-content">
                { link === '/question/javascript' 
                    ? <p>자바스크립트 질문</p> 
                    : link === '/question/typescript'
                        ? <p>타입스크립트 질문</p> 
                    : link === '/question/react'
                        ? <p>리액트 질문.</p>
                    : link === '/question/next'
                        ? <p>Next 질문.</p>
                    : <p>Spring 질문.</p> }
            </div>
        </div>
    );
}
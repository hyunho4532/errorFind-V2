import { useRecoilValue } from "recoil";
import { SideBar } from "../../component/sidebar";
import './index.scss';
import { state } from "../../recoil/Atom";
import { JavaScriptPage } from "./javascript";

export function Question() {

    const link = useRecoilValue(state);

    return (
        <div className="container">
            <SideBar />
            <div className="main-content">
                { link === '/question/javascript' 
                    ? <JavaScriptPage />
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
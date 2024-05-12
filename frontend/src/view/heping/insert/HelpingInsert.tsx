import { useEffect, useState } from 'react';
import './HelpingInsert.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function HelpingInsert() {

    const [errorNameData, setErrorNameData] = useState(null);
    const [errorSituationData, setErrorSituationData] = useState(null);
    const [errorRequestData, setErrorRequestData] = useState(null);

    const userAuth = localStorage.getItem('user')
    const userAuthFromJson = JSON.parse(userAuth!);

    useEffect(() => {
        console.log(userAuthFromJson.userData.authuid)
        console.log(userAuthFromJson.userData.nickname)
    }, [userAuthFromJson.userData.authuid, userAuthFromJson.userData.nickname])

    const handleErrorNameChange = (e: any) => {
        setErrorNameData(e.target.value);
    }

    const handleErrorSituationChange = (e: any) => {
        setErrorSituationData(e.target.value);
    }

    const handleErrorRequestChange = (e: any) => {
        setErrorRequestData(e.target.value);
    }

    const notify = () => {

        const data = {
            id: userAuthFromJson.userData.authuid,
            helpingUserName: userAuthFromJson.userData.nickname,
            helpingName: errorNameData,
            helpingSituation: errorSituationData,
            helpingRequest: errorRequestData
        }
    
        axios.post('http://localhost:50000/errorHelpingData', data)
            .then(response => {
                console.log("응답 받음", response.data);
            })
            .catch(error => {
                console.log("응답 중 에러가 발생함", error);
            })

        toast.success("헬핑이 등록되었어요!!");
    }

    return (
        <div className="helping-insert">
            <h2 className="helping-insert-title">헬핑 등록하기</h2>
            <h4 className="helping-insert-title">* 헬핑은 내 화면을 공유하고, 다른 개발자가 화면을 보면서 에러를 해결합니다!</h4>
            <h5 className="helping-insert-title">* 에러를 등록하고, 다른 사람들이 댓글로 에러를 분석해도 안될 때 이용해주세요.</h5>
            <div className="helping-insert-component">
                
                <h3>1. 에러가 어디서 발생하셨나요? 💣</h3>
                <select className="helping-insert-select" onChange={handleErrorNameChange}>
                    <option>안드로이드</option>
                    <option>DevOps</option>
                    <option>웹</option>
                </select>

                <h3>2. 에러가 발생했을 때 상황을 입력해주세요 👓</h3>
                <input className="helping-insert-input" placeholder="ex) 앱 실행 시 튕기는 현상 발생" onChange={handleErrorSituationChange}></input>

                <h3>3. 요청 사항💣</h3>
                <input className="helping-insert-input" placeholder="ex) 에러 분석 잘하는 개발자만 와주세요 ㅠㅠ" onChange={handleErrorRequestChange}></input>
            </div>

            <button className="helping-insert-button" onClick={notify}>
                헬핑! 등록하기
            </button>

            <ToastContainer />
        </div>
    )
}

export default HelpingInsert
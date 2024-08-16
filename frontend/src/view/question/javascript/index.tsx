import { useState } from "react"
import { QuestionDialog } from "../../../component/dialog/QuestionDialog";

export function JavaScriptPage() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const questionClick = () => {
        setModalIsOpen(true);
    }

    return (
        <div>
            <div className="Main">
                <h3 className="JavaScript">자바 스크립트 질문 방</h3>
                <button 
                    onClick={questionClick} 
                    className="Button">질문하기 ✌️</button>
            </div>

            <div>
                <h3 className="CurrentQuestion">최근 사용자들이 이런 질문을 했어요!</h3>
            </div>

            { modalIsOpen && <QuestionDialog modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} /> }
        </div>
    )
}
import { useMemo, useState } from "react"
import { QuestionDialog } from "../../../component/dialog/QuestionDialog";
import { supabase } from "../../../config";
import { Card } from "@mui/material";

export function JavaScriptPage() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [data, setData] = useState<any[]>([]);

    const questionClick = () => {
        setModalIsOpen(true);
    }

    useMemo(async () => {
        const { data } = await supabase
            .from('Question')
            .select()
            .eq('language', '자바스크립트');

        setData(data!);
    }, [])

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
                { data.map((data: any, index: number) => (
                    <Card key={index} className="Card">
                        <p>{data.language}</p>
                    </Card>
                ))}
            </div>

            { modalIsOpen && <QuestionDialog modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} /> }
        </div>
    )
}
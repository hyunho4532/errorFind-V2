import { InputLabel, MenuItem, Modal, Select, SelectChangeEvent } from "@mui/material";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import './index.scss'
import { LanguageItems, supabase } from "../../config";
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

export interface LoginDialogProps {
    modalIsOpen: boolean,
    setModalIsOpen: Dispatch<SetStateAction<boolean>>,
}

export function QuestionDialog(props: LoginDialogProps) {

    const [language, setLanguage] = useState('');
    const editorRef = useRef<Editor>(null);

    const questionClose = () => {
        props.setModalIsOpen(false);
    };

    const questionClick = () => {
        if (editorRef.current) {
            const editorInstance = editorRef.current.getInstance().getMarkdown();
            
            supabase.from('Question').insert([{
                language: language,
                content: editorInstance
            }])

        } else {
            console.error("Editor instance is not available");
        }
    }

    const handleChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value);
    };

    return (
        <Modal
            open={props.modalIsOpen}
            onClose={questionClose}>
            
            <div className="modal">
                <h3 className="Title">질문 등록</h3>
                
                <div>
                    <InputLabel id="demo-simple-select-label">언어 선택</InputLabel>
                    <Select
                        className="Select"
                        value={language}
                        label="이름 입력"
                        onChange={handleChange}>
                        { LanguageItems.map((data: any, index: number) => (
                            <MenuItem value={data.title}>{data.title}</MenuItem>
                        ))}
                    </Select>
                </div>

                <div className="Content">
                    <p>질문할 내용을 입력해주세요.</p>
                    <Editor
                        ref={editorRef}
                        initialValue="hello react editor world!"
                        previewStyle="vertical"
                        height="300px"
                        initialEditType="markdown"
                        useCommandShortcut={true}
                    />
                </div>

                <div className="Footer">
                    <button className="QuestionButton" onClick={questionClick}>질문 등록 완료!</button>
                </div>
            </div>
        </Modal>
    )
}
import {ChangeEvent, useEffect, useState} from "react";
import axios from "axios";
import '../scss/errorWirteBoard.scss';
import {useRecoilState} from "recoil";
import { ErrorBoard } from "../../../model/ErrorBoard";
import { errorBoard } from "../../../recoil/Atom";

function SecondGroup() {

    const [errorTypeData, setErrorTypeData] = useState([]);
    const [errorBoardData, setErrorBoardData] = useRecoilState<ErrorBoard>(errorBoard)

    useEffect(() => {
        axios.post("http://localhost:50000/errorTypeData")
            .then(response => {
                setErrorTypeData(response.data);
            })
            .catch(error => {
                console.error(error);
            })
        
    }, []);


    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const errorTypeData = e.target.value;

        setErrorBoardData ({ ...errorBoardData, errorTypeData: errorTypeData });
    }

    const SecondGroup = () => {
        return (
            <div className="error-write-board-component-second-group">
                <h2 className="error-write-board-component-kind">2. 에러 종류를 선택해주세요 😏😏</h2>
                <div className="selectBox">
                    <select name="fruits" className="select" value={errorBoardData.errorTypeData} onChange={handleSelectChange}>
                        { errorTypeData.map((value) => <option>{value}</option> )}
                    </select>
                </div>
            </div>

        )
    }

    return <SecondGroup />
}

export default SecondGroup
import {ChangeEvent, useEffect, useState} from "react";
import axios from "axios";
import '../scss/errorWirteBoard.scss';
import {useRecoilState} from "recoil";
import { ErrorBoard } from "../../../model/ErrorBoard";
import { errorBoard } from "../../../recoil/Atom";

function SecondGroup() {

    const [errorTypeDataFromWeb, setErrorTypeDataFromWeb] = useState([]);
    const [errorTypeDataFromAndroid, setErrorTypeDataFromAndroid] = useState([]);
    const [errorTypeDataFromDevOps, setErrorTypeDataFromDevOps] = useState([]);
    const [errorBoardData, setErrorBoardData] = useRecoilState<ErrorBoard>(errorBoard)


    useEffect(() => {
        axios.post("https://port-0-errorfind-backend-2aat2clulwvny3.sel5.cloudtype.app/errorTypeDataFromWeb")
            .then(response => {
                setErrorTypeDataFromWeb(response.data);
            })
            .catch(error => {
                console.error(error);
            })

        axios.post("https://port-0-errorfind-backend-2aat2clulwvny3.sel5.cloudtype.app/errorTypeDataFromAndroid")
            .then(response => {
                setErrorTypeDataFromAndroid(response.data);
            })
            .catch(error => {
                console.error(error);
            })


        axios.post("https://port-0-errorfind-backend-2aat2clulwvny3.sel5.cloudtype.app/errorTypeDataFromDevOps")
            .then(response => {
                setErrorTypeDataFromDevOps(response.data);
            })
            .catch(error => {
                console.error(error);
            })
        
    }, []);

    console.log(errorBoardData.selectedPlatformData);


    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const errorTypeData = e.target.value;

        setErrorBoardData ({ ...errorBoardData, errorTypeData: errorTypeData });
    }

    const SecondGroup = () => {
        return (
            <div className="error-write-board-component-second-group">
                <h2 className="error-write-board-component-kind">2. 에러 종류를 선택해주세요 😏😏</h2>
                <div className="selectBox">
                    { errorBoardData.selectedPlatformData == '웹' ?
                        <select name="fruits" className="select" value={errorBoardData.errorTypeData} onChange={handleSelectChange}>
                            { errorTypeDataFromWeb.map((value) => <option>{value}</option> )}
                        </select>
                    
                    : errorBoardData.selectedPlatformData == '안드로이드' ?
                        <select name="fruits" className="select" value={errorBoardData.errorTypeData} onChange={handleSelectChange}>
                            { errorTypeDataFromAndroid.map((value) => <option>{value}</option>)}
                        </select>

                    : errorBoardData.selectedPlatformData == 'DevOps' ?
                        <select name="fruits" className="select" value={errorBoardData.errorTypeData} onChange={handleSelectChange}>
                            { errorTypeDataFromDevOps.map((value) => <option>{value}</option>)}
                        </select>
                    : <p></p>
                }   

                </div>
            </div>

        )
    }

    return <SecondGroup />
}

export default SecondGroup
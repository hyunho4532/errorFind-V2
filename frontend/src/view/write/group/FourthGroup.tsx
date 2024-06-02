import '../scss/errorWirteBoard.scss';
import { useRecoilState } from 'recoil';
import { ErrorBoard } from '../../../model/ErrorBoard';
import { errorBoard } from '../../../recoil/Atom';

function FourthGroup() {

    const FourthGroup = () => {
        const [errorBoardData, setErrorBoardData] = useRecoilState<ErrorBoard>(errorBoard)

        const inputSituationChange = (e: any) => {
            const situationData = e.target.value;
            
            setErrorBoardData({ ...errorBoardData, errorSituation: situationData });
        };
        

        return (
            <div className="error-write-board-component-fourth-group">
                <h2 className="error-write-board-component-situation">4. 에러가 발생한 상황을 입력해주세요! 🤔🤔</h2>
                <div className="inputBox">
                    <textarea className="input-situation" placeholder="에러가 발생한 상황을 상세하게 입력해주세요!" onChange={inputSituationChange}></textarea>
                </div>
            </div>
        )
    }

    return <FourthGroup />
}

export default FourthGroup
import '../scss/errorWirteBoard.scss';
import { useRecoilState } from "recoil";
import { errorBoard } from "../../../recoil/Atom";
import { ErrorBoard } from "../../../model/ErrorBoard";

function ThirdGroup() {

    const [errorBoardData, setErrorBoardData] = useRecoilState<ErrorBoard>(errorBoard);

    const FileUpload = () => {

        const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0];
            const reader = new FileReader();

            reader.onload = () => {
                const errorFileData = reader.result as string;

                setErrorBoardData({ ...errorBoardData, errorFile: errorFileData });
            }

            reader.readAsText(file!);
        }

        return (
            <div className="error-write-board-component-third-group">
                <h2 className="error-write-board-component-error-title">3. 로그 파일을 올려주세요 😌😌</h2>
                <form>
                    <input
                        className="error-write-board-component-error"
                        type="file"
                        name="file"
                        onChange={handleFileUpload}
                    />
                </form>
            </div>
        );
    }

    return <FileUpload />
}

export default ThirdGroup
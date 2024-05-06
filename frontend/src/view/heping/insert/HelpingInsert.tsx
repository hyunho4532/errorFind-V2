import './HelpingInsert.scss'

function HelpingInsert() {
    return (
        <div className="helping-insert">
            <h2 className="helping-insert-title">헬핑 등록하기</h2>
            <h4 className="helping-insert-title">* 헬핑은 내 화면을 공유하고, 다른 개발자가 화면을 보면서 에러를 해결합니다!</h4>
            <h5 className="helping-insert-title">* 에러를 등록하고, 다른 사람들이 댓글로 에러를 분석해도 안될 때 이용해주세요.</h5>
            <div className="helping-insert-component">
                <h3>1. 에러가 어디서 발생하셨나요? 💣</h3>
                <select className="helping-insert-select">
                    <option>안드로이드</option>
                    <option>DevOps</option>
                    <option>웹</option>
                </select>

                <h3>2. 에러가 발생했을 때 상황을 입력해주세요 💣</h3>
                <select className="helping-insert-select">
                    <option>안드로이드</option>
                    <option>DevOps</option>
                    <option>웹</option>
                </select>
            </div>
        </div>
    )
}

export default HelpingInsert
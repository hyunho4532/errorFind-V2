import { Link } from 'react-router-dom'
import './Helping.scss'

function Helping() {

    return (
        <div>
            <div>
                <Link to="/error/helping/insert">
                    <button className="helping-button">
                        헬핑! 등록하기 🎈
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Helping
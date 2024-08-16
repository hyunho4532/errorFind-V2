import { useRecoilState } from 'recoil';
import { MenuItems } from '../../config'
import './sidebar.scss'
import { state } from '../../recoil/Atom';

export function SideBar() {

    const [, setLink] = useRecoilState(state);

    const moveToPage = (link: string) => {
        setLink(link);
    }

    return (
        <div className="Sidebar">
            <p className="Title">메뉴</p>
            <ul className="Items">
                { MenuItems.map((data: any, key: number) => (
                    <p onClick={() => moveToPage(data.link)} className="Item">{data.title} {data.icon}</p>
                ))}
            </ul>
        </div>
    )
}
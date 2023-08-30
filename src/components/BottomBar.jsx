import "../styles/bottomBar.scss"
import { AiOutlinePhone, AiOutlineWhatsApp } from 'react-icons/ai';

export const BottomBar = () => {
    return (
        <div className="bottomBar">
            <div className="contact phone">
                <a href="">
                    <AiOutlinePhone size={30} />
                </a>
            </div>

            <div className="created">
                <p> © created by aelita</p>
            </div>

            <div className="contact whatsapp">
                <a href="https://wa.me/905532768090">
                    <AiOutlineWhatsApp size={30} />
                </a>
            </div>

        </div>

    )
}

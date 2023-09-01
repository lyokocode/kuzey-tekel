import { useState } from "react";
import "../styles/bottomBar.scss"
import { AiOutlineClose, AiOutlinePhone, AiOutlineWhatsApp } from 'react-icons/ai';
import { BsChevronDoubleRight } from "react-icons/bs"
export const BottomBar = () => {

    const [modal, setModal] = useState(false)

    const modalToggle = () => {
        setModal(!modal)
    }

    const handleCreateOrder = () => {
        const phoneNumber = "905532768090"; // Phone Number
        const message = encodeURIComponent(
            "Merhaba, sipariş vermek istiyorum"
        ); // Message
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

        window.location.href = whatsappUrl;
    };
    return (
        <div className="bottomBar">
            <div className="contact phone">
                <a href="tel:0123456789">
                    <AiOutlinePhone size={30} />
                </a>
            </div>

            <div className="created">
                <p> &copy; created by aelita</p>
            </div>

            <button onClick={modalToggle} className="contact whatsapp">
                <AiOutlineWhatsApp size={30} />
            </button>

            {modal && <>
                <article className="whatsaapModal">
                    <div className="whatsaapHeader">
                        <div className="left">
                            <AiOutlineWhatsApp size={25} />
                            <span>WhatsApp</span>
                        </div>
                        <div className="right">
                            <AiOutlineClose onClick={modalToggle} size={25} />
                        </div>
                    </div>
                    <div className="chatBox">
                        <div className="content">
                            <div className="message">Merhaba, size nasıl yardımcı olabiliriz?</div>
                        </div>
                    </div>
                    <button onClick={handleCreateOrder} className="sendMessage">
                        <span>Sipariş verin</span>
                        <BsChevronDoubleRight />
                    </button>
                </article>
            </>}

        </div>

    )
}

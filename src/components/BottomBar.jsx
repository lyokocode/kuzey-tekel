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
        const phoneNumber = "905524794249"; // Phone Number
        const message = encodeURIComponent(
            "Merhaba, sipariş vermek istiyorum."
        ); // Message
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

        window.location.href = whatsappUrl;
    };
    return (
        <div className="bottomBar">
            <button className="contact phone" aria-label="Phone">
                <a href="tel:+905524794249">
                    <AiOutlinePhone size={30} name="phone" />
                </a>
            </button>

            <a href="https://aelita.vercel.app" className="created">
                <p> &copy; created by aelita</p>
            </a>

            <button onClick={modalToggle} className="contact whatsapp" aria-label="WhatsApp">
                <AiOutlineWhatsApp size={30} name="whatsApp" />
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
                    <button onClick={handleCreateOrder} className="sendMessage" aria-label="WhatsApp send message">
                        <span>Sipariş verin</span>
                        <BsChevronDoubleRight name="whatsApp" />
                    </button>
                </article>
            </>}

        </div>

    )
}

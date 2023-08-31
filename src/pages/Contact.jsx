import "../styles/contact.scss"
export const Contact = () => {
    return (
        <div className="contactPage">
            <div className="contactDetails">
                <div className="leftDetails">
                    <h2>İletişim Bilgileri</h2>
                    <p>Sosyal Medya Hesaplarımız:</p>
                    <ul>
                        <li>Facebook: <a href="#">@kuzeytekel</a></li>
                        <li>Instagram: <a href="#">@kuzeytekel</a></li>
                        {/* Diğer sosyal medya hesapları */}
                    </ul>
                    <p>Telefon Numaramız: <a href="tel:0123456789">0123 456 78 9</a></p>
                    <p>E-posta Adresimiz: <a href="mailto:info@kuzeytekel.com">info@kuzeytekel.com</a></p>
                </div>
                <div className="rightMap">
                    {/* Harita embed kodu */}
                    <iframe src="https://maps.google.com/maps?q=ergene%20555%20sokak%20no:16&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width="100%" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen=""></iframe>
                </div>
            </div>
        </div>
    )
}

import "../styles/about.scss"


export const About = () => {
    return (
        <section className="aboutPage">

            <div className="left">
                <img src="/about/kuzey-tekel.jpg" alt="kuzey tekel" />

            </div>

            <div className="right">
                <div className="about">
                    <p className="title">
                        Misyonumuz
                    </p>
                    <p className="text">
                        Kuzey Tekel olarak, müşterilere kaliteli ve çeşitli alkol ürünleri sunarak, özel anlarını daha anlamlı kılmayı hedefliyoruz. Yenilikçi yaklaşımımız ve güçlü hizmet ağı ile müşteri memnuniyetini en üst seviyede tutmayı amaçlıyoruz.
                    </p>
                </div>
                <div className="about">
                    <p className="title">
                        Misyonumuz
                    </p>
                    <p className="text">
                        Vizyonumuz, alkol hizmeti sektöründe örnek gösterilen bir tekel bayii olmak. Müşterilerimize en iyi kalitede ürünleri en iyi fiyatlarla sunarak, onların özel anlarını daha özel kılmayı amaçlıyoruz. Alanımızda lider olarak, müşteri memnuniyetini esas alıyor ve topluma değer katan bir işletme olarak varlığımızı sürdürmeyi hedefliyoruz.
                    </p>
                </div>
            </div>

        </section>
    )
}

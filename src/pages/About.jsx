import { Helmet } from "react-helmet"
import "../styles/about.scss"


export const About = () => {
    return (
        <section className="aboutPage">
            {/* seo */}
            <Helmet>
                <title>Kuzey Tekel - Misyon ve Vizyon</title>
                <meta
                    name="description"
                    content="Kuzey Tekel olarak, misyonumuz müşterilere kaliteli ve çeşitli alkol ürünleri sunarak, özel anlarını daha anlamlı kılmaktır. Vizyonumuz ise alkol hizmeti sektöründe örnek gösterilen bir tekel bayii olmak ve müşterilere en iyi kalitede ürünleri en iyi fiyatlarla sunmaktır."
                />
                <meta
                    name="keywords"
                    content="Kuzey Tekel, tekel bayii, misyon, vizyon, alkol ürünleri, kaliteli hizmet"
                />
                <meta name="robots" content="index, follow" />
            </Helmet>

            {/* about page */}
            <div className="left">
                <img src="/about/kuzey-tekel.jpg" alt="kuzey tekel" />

            </div>

            <div className="right">
                <div className="about">
                    <h2 className="title">
                        Misyonumuz
                    </h2>
                    <p className="text">
                        Kuzey Tekel olarak, müşterilere kaliteli ve çeşitli alkol ürünleri sunarak, özel anlarını daha anlamlı kılmayı hedefliyoruz. Yenilikçi yaklaşımımız ve güçlü hizmet ağı ile müşteri memnuniyetini en üst seviyede tutmayı amaçlıyoruz.
                    </p>
                </div>
                <div className="about">
                    <h2 className="title">
                        Vizyonumuz
                    </h2>
                    <p className="text">
                        Vizyonumuz, alkol hizmeti sektöründe örnek gösterilen bir tekel bayii olmak. Müşterilerimize en iyi kalitede ürünleri en iyi fiyatlarla sunarak, onların özel anlarını daha özel kılmayı amaçlıyoruz. Alanımızda lider olarak, müşteri memnuniyetini esas alıyor ve topluma değer katan bir işletme olarak varlığımızı sürdürmeyi hedefliyoruz.
                    </p>
                </div>
            </div>
        </section>
    )
}

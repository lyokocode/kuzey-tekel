import Slider from "react-slick";
import "../styles/home.scss";
import { sliders } from "../data";
import { Helmet } from "react-helmet";

export function Home() {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "ease-in-out"
    };

    return (
        <section className="homePage">
            {/* seo */}
            <Helmet>
                <title>Kuzey Tekel - İzmir Bornova Tekel Bayii</title>
                <meta
                    name="description"
                    content="Kuzey Tekel, İzmir Bornova'da 24 saat hizmet veren tekel bayii. Geniş ürün yelpazesi ve paket servis hizmeti ile sizlere hizmet vermekten gurur duyarız."
                />
                <meta
                    name="keywords"
                    content="Kuzey Tekel, tekel bayii, Bornova, İzmir, 24 saat açık, paket servis"
                />
                <meta name="robots" content="index, follow" />
            </Helmet>

            {/* home page */}
            <div className="content">
                <h1>Hadi harika bir <span>Sipariş oluşturalım</span></h1>
                <p>Sen ara biz getirelim. Tekel Bayii'n sadece bir telefon uzağında</p>
            </div>
            <Slider {...settings} className="slider">
                {sliders.map(slider => (
                    <figure key={slider.id}>
                        <img src={slider.image} alt={slider.alt} />
                    </figure>
                ))}
            </Slider>
        </section>
    );
}

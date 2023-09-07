import Slider from "react-slick";
import "../styles/home.scss";
import { sliders } from "../data";
import { Hello } from "../components"
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function Home() {

    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        setModalOpen(true);

        const modalTimeout = setTimeout(() => {
            setModalOpen(false);
        }, 4000);

        return () => {
            clearTimeout(modalTimeout);
        };
    }, []);
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
                <title>Kuzey Tekel - İzmir Bornova 24 Saat Açık Tekel Bayi</title>
                <meta
                    name="description"
                    content="Kuzey Tekel, İzmir Bornova'da 24 saat hizmet veren tekel bayii. Geniş ürün yelpazesi ve paket servis hizmeti ile sizlere hizmet vermekten gurur duyarız."
                />
                <meta
                    name="keywords"
                    content="açık tekel, tekel, tekel bayi, alkol, alkol fiyatları, şarap, rakı, bira, viski "
                />
                <meta name="robots" content="index, follow" />
            </Helmet>

            {modalOpen && (
                <Hello />
            )}
            {/* home page */}
            <div className="content">
                <h1>Hadi kıyak bir <span>Sipariş oluşturalım</span></h1>
                <p>{"Sen ara biz getirelim. Tekel Bayii'n sadece bir telefon uzağında"}</p>
            </div>
            <Slider {...settings} className="slider">
                {sliders.map(slider => (
                    <figure key={slider.id}>
                        <img src={slider.image} alt={slider.alt} />
                    </figure>
                ))}
            </Slider>
            <div className="cartContainer">
                <Link to="/services" className="cart">
                    <div className="imageContainer">
                        <img src="/hero/delivery.gif" alt="" />
                    </div>
                    <span className="title">
                        <h2>Hızlı & Güvenli teslimat </h2>
                    </span>
                </Link>

                <Link to="/products" className="cart">
                    <div className="imageContainer">
                        <img src="/hero/products.jpg" alt="" />
                    </div>
                    <span className="title">
                        <h2>Geniş ürün yelpazesi</h2>
                    </span>
                </Link>

                <Link to="/contact" className="cart">
                    <div className="imageContainer">
                        <img src="/hero/izmir.jpg" alt="" />
                    </div>
                    <span className="title">
                        <h2>Geniş teslimat bölgesi</h2>
                        <h3>24 saat servis</h3>
                    </span>
                </Link>
            </div>
        </section>
    );
}
7
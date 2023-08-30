import Slider from "react-slick";
import "../styles/home.scss"

export function Home() {

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    return (
        <section className=" homePage">

            <div className="content ">

                <h1  >Hadi harika bir <span >Sipariş oluşturalım</span></h1>
                <div className="text">
                    <p >Sen ara biz getirelim. Tekel Bayii'n sadece bir telefon uzağında </p>
                </div>
            </div>

            <Slider {...settings} className="slider">
                <figure>
                    <img src='/delivery.gif' />
                </figure>

                <figure>
                    <img src='/create.gif' />
                </figure>

            </Slider>
        </section>
    );
}

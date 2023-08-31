import Slider from "react-slick";
import "../styles/home.scss"
import { sliders } from "../data";

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

                {
                    sliders && sliders.map(slider => (
                        <figure key={slider.id}>
                            <img src={slider.image} alt={slider.alt} />
                        </figure>

                    ))
                }


            </Slider>
        </section>
    );
}

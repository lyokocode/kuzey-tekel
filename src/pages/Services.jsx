import { AiOutlineClockCircle } from 'react-icons/ai';
import { regions } from '../data';
import '../styles/services.scss';
import { Helmet } from 'react-helmet';

export const Services = () => {
    return (
        <section className="servicesPage">
            {/* seo */}
            <Helmet>
                <title>Kuzey Tekel - Özel Hizmetler</title>
                <meta
                    name="description"
                    content="Kuzey Tekel, size özel hizmetler sunuyor. İzmir'in çeşitli bölgelerine hızlı teslimat ve geniş hizmet ağı ile hizmetinizdeyiz."
                />
                <meta
                    name="keywords"
                    content="Kuzey Tekel, özel hizmetler, teslimat süresi, bölgeler, hızlı teslimat, İzmir tekel bayii"
                />
                <meta name="robots" content="index, follow" />
            </Helmet>
            {/* services page */}
            <div className="header">
                <h1 className="title">Kuzey Tekel</h1>
                <p className="description">Size Özel Hizmetler Sunuyoruz</p>
            </div>
            <div className="contact">
                <div className="locationContainer">
                    {regions.map((region) => (
                        <article className="location" key={region.id}>
                            <h2 className="regionName">{region.name}</h2>
                            <span className="deliveryTime">
                                <AiOutlineClockCircle className="clockIcon" />  {region.deliveryTime} dakika
                            </span>
                            <ul className="neighborhoodList">
                                {region.neighborhoods.map((neighborhood, i) => (
                                    <li key={i}>{neighborhood}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};


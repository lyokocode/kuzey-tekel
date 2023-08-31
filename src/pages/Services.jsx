import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { regions } from '../data';
import '../styles/services.scss';

export const Services = () => {
    return (
        <section className="servicesPage">
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
                                {region.deliveryTime} dakika  <AiOutlineClockCircle className="clockIcon" />
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


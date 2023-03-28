import {content} from '../Content';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';

import { Pagination , EffectFade, Keyboard, Autoplay} from "swiper";

function Certificates(){
    const {certificate} = content;

    return(
        <section id = 'certificates'>
        <div className="container">
            <div className="wraper">
                <div className="head-section">
                    <h2 data-aos='fade-left' data-aos-delay='800'>{certificate.title}</h2>
                    <p data-aos='fade-left' data-aos-delay='900'>{certificate.subtitle}</p>
                </div>
                <Swiper pagination={{
                        clickable: true,
                        }}
                        loop = {true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                          }}
                        fadeEffect = {{
                            crossFade: true,                             
                            }}
                        spaceBetween={20}
                        keyboard={{
                            enabled: true,
                            onlyInViewport: false,
                          }}                        
                          effect={'fade'}
                          speed={3500}                       
                        modules={[Pagination, EffectFade, Keyboard, Autoplay]}>
                    {certificate.certificates.map((content, i) =>(
                            <SwiperSlide key={i}>
                                <div className="row">
                                    <div className="img-box">
                                        <img src={content.image} alt="certificate" />
                                    </div>
                                    <div className="detail-box">
                                        <h2>{content.name}</h2>
                                        <p>Issuing Organization: <span>{content.issuingOrganization}</span></p>
                                        <p>Issue Date: <span>{content.issueDate}</span></p>
                                        <p>Expiration Date: <span>{content.expirationDate}</span></p>
                                        <p>Credential ID: <span>{content.credentialId}</span></p>
                                        <button className='btn'><a href={content.credentialURL} target="_blank" rel="noreferrer">Verfiy</a></button>
                                    </div>
                                </div>

                            </SwiperSlide>
                    ))}
                </Swiper>
                </div>
            </div>
        </section>
    );

}

export default Certificates;
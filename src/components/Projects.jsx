import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Keyboard, Pagination} from "swiper";
import { useState } from "react";

function Projects(){
    const {project} = content
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <section id = 'projects'>
        <div className="container">
            <div className="wraper">
                <div className="head-section">
                    <h2 data-aos='fade-left' data-aos-delay='800'>{project.title}</h2>
                    <p data-aos='fade-left' data-aos-delay='900'>{project.subtitle}</p>
                </div>
            <Swiper 
                direction={"vertical"}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                spaceBetween={15}
                slidesPerView={1.8}
                touchEventsTarget = 'wrapper'
                onSlideChange={(e) => {
                    setActiveIndex(e.realIndex);
                }}
                keyboard ={{
                    enabled: true,
                    onlyInViewport: false,
                }}
                speed={2500}  
                modules={[Pagination, Keyboard]}                  
            >
                {project.projects.map((content, i) =>(
                    <SwiperSlide key={i}>
                        <div className={`right-box 
                        ${activeIndex !== i && " left-box"}`} >
                            <h2>{content.name}</h2>
                            <p>{content.description}</p>
                            <button className="btn"><a href={content.URL} target="_blank" rel="noreferrer">View</a></button>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>

            </div>
        </div>
    </section>
    )
}

export default Projects;
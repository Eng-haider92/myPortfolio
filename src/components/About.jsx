import {content} from '../Content';
import '../assets/CSS/styles.css';
import { GrPhone, GrCertificate} from "react-icons/gr";
import { SiWebmoney, SiFreelancer} from "react-icons/si";
import { GiAges, GiModernCity} from "react-icons/gi";
import { FaBirthdayCake} from "react-icons/fa";
import { MdAttachEmail} from "react-icons/md";
import { IconContext } from "react-icons";




function About (){
    const {header, about} = content; 
    return(
        <section id = 'about'>
        <div className='container'>
            <div className='wraper' data-aos='fade-down' data-aos-delay='800'>
                <div className="head-section">
                    <h2 data-aos='fade-left' data-aos-delay='800'>{about.title}</h2>
                    <p data-aos='fade-left' data-aos-delay='900'>{about.aboutMe}</p>
                </div>
                <div className='title' data-aos='fade-up' data-aos-delay='800'>
                    <h3>{header.title}</h3>
                </div>
                <div className="row">
                    <div className='about-box'>
                        <div className='item' 
                             data-aos='fade-up' 
                             data-aos-delay='500' 
                             data-aos-easing="ease-in-sine">
                            <IconContext.Provider value={{ className: 'icon'}}>
                                <FaBirthdayCake />
                            </IconContext.Provider>
                            <p>Birthday: <span>{about.birthday}</span></p>
                            <IconContext.Provider value={{ className: 'icon'}}>
                                <GiAges />
                            </IconContext.Provider>
                            <p>Age: <span>{about.age}</span></p>
                        </div>
                        <div className='item' 
                             data-aos='fade-up' 
                             data-aos-delay='600' 
                             data-aos-easing="ease-in-sine">
                            <IconContext.Provider value={{ className: 'icon'}}>
                                <SiWebmoney />
                            </IconContext.Provider>
                            <p>Website: <a href={about.website}><span>www.myWebsite.com</span></a></p>
                            <IconContext.Provider value={{ className: 'icon'}}>
                                <GrCertificate />
                            </IconContext.Provider>
                            <p>Degree: <span>{about.degree}</span></p>
                        </div>
                        <div className='item'                             
                             data-aos='fade-up' 
                             data-aos-delay='700' 
                             data-aos-easing="ease-in-sine">
                            <IconContext.Provider value={{className: 'icon'}}>
                                <GrPhone />
                            </IconContext.Provider>
                            <p>Phone: <span>{about.phone}</span></p>
                            <IconContext.Provider value={{color: '#03f9f9'}}>
                                <MdAttachEmail />
                            </IconContext.Provider>
                            <p>Email: <span>{about.email}</span></p>
                        </div>
                        <div className='item'                              
                             data-aos='fade-up'
                             data-aos-delay='800' 
                             data-aos-easing="ease-in-sine">
                            <IconContext.Provider value={{ className: 'icon'}}>
                                <GiModernCity />
                            </IconContext.Provider>
                            <p>City: <span>{about.city}</span></p>
                            <IconContext.Provider value={{className: 'icon'}}>
                                <SiFreelancer />
                            </IconContext.Provider>
                            <p>Freelancer: <span>{about.freelancer}</span></p>
                        </div>
                    </div>
                    <div className='image-box' data-aos='zoom-in' data-aos-delay='1000'>
                        <img src={header.profileImage} alt="personal"/>
                    </div>

                </div>
            </div>
        </div>
        </section>
    );
}

export default About;
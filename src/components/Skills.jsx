import {content} from '../Content';


function Skills(){
    const {skills} = content;
    return(
        <section id = 'skills'>
        <div className="container">
            <div className="wraper">
                <div className="head-section">
                    <h2 data-aos='fade-left' data-aos-delay='800'>{skills.title}</h2>
                    <p data-aos='fade-left' data-aos-delay='900'>{skills.subtitle}</p>
                </div>

                <div className="grid grid-mobile">
                    {skills.skills_content.map((content,i) =>(
                        <div className="item" 
                             key={i}
                             data-aos-delay={200}
                             data-aos='fade-up'>
                            <div className="logo">
                                <img src={content.logo} alt="skills logo" />
                            </div>
                            <div className="content">
                                <h2>{content.name}</h2>
                                <p>{content.para}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    );
}

export default Skills;
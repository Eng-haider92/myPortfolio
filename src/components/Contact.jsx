import { useRef } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { IconContext } from "react-icons";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import {BsHeartFill} from 'react-icons/bs';

const Contact = () => {
  const { contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
      contact.serviceID, contact.templateID, form.current, contact.myKey
      )
      .then(
        (result) => {
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email send Successfully");
        },
        (error) => {
            console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section id = 'contact'>
        <div className='container'>
            <div className='wraper' data-aos='fade-down' data-aos-delay='800'>
                <div className="head-section">
                    <h2 data-aos='fade-left' data-aos-delay='800'>Contact</h2>
                </div>
                <div className='row'>
                    <div className="form-box">
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            data-aos="fade-up"
                        >
                            <input
                            type="text"
                            name="user_name"
                            placeholder="Name"
                            required
                            />
                            <input
                                type="email"
                                name="user_email"
                                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                                placeholder="Email Id"
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                required
                            ></textarea>
                            <button className="btn">Submit</button>
                            <Toaster 
                                containerStyle= {{
                                    position: 'relative',
                                    top: '-8px',
                                    inset: '0px',                                                                  
                                    }}
                               toastOptions={{
                                className: '',
                                style: {
                                    width: '35%',
                                    height: '30%',
                                    borderBlockStyle: '1px solid #03f9f9',
                                    backgroundColor: '#020a42',
                                    color: '#fff',                                  
                                   },
                                }}                              
                            />
                        </form>
                    </div>
                    <div className="footer-box">
                        <div className="footer-desc" data-aos="fade-left">
                            <p>{contact.footer}</p>
                        </div>
                        <div className="icon-box" data-aos="fade-left">
                            <div className="icon-item" >
                                <IconContext.Provider value={{ className: 'social-icon'}}>
                                    <a href="https://www.facebook.com/haider.rajab92/" 
                                    target='_blank' 
                                    rel="noreferrer">
                                        <FaFacebookF />
                                    </a>
                                </IconContext.Provider>
                            </div>
                            <div className="icon-item">
                                <IconContext.Provider value={{ className: 'social-icon'}}>
                                    <a href="https://www.linkedin.com/in/haider-rajab/" 
                                    target='_blank' 
                                    rel="noreferrer">
                                        <FaLinkedinIn />
                                    </a>
                                </IconContext.Provider>  
                            </div>
                            <div className="icon-item">                      
                                <IconContext.Provider value={{ className: 'social-icon'}}>
                                    <a href="https://t.me/Eng_Haider192" 
                                    target='_blank' 
                                    rel="noreferrer">
                                        <FaTelegramPlane />
                                    </a>
                                </IconContext.Provider>
                            </div>
                            <div className="icon-item">
                                <IconContext.Provider value={{ className: 'social-icon'}}>
                                    <a href="https://wa.me/963935662976"
                                        target='_blank' 
                                        rel="noreferrer">
                                        <FaWhatsapp />
                                    </a>
                                </IconContext.Provider>
                            </div>
                        </div>
                        <div className="copyright">
                            <p>{contact.copyright}</p>
                            <IconContext.Provider value={{ className: 'heart-icon'}}>
                                <BsHeartFill/>
                            </IconContext.Provider>
                            <span>{contact.author}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;

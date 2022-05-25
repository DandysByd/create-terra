import React, {useRef} from 'react'
import './styles/contactFrom.css'
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_68cxd4n', form.current, 'obL2iK5wwxqBV1j9b')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <form className='contact-form' ref={form} onSubmit={sendEmail}>
        <h6>If you have any questions, feel free to contant us on email@email.com or below</h6>
       <input type='email' required className='email-input' name="from_name" placeholder='Your email adress'></input>
        <input type='file' className='file-input'></input>
        <textarea rows='10' name="message" className='text-area' placeholder='Extra ideas, needs..' ></textarea>
        <button type='submit' className='submit-btn'>Send</button>
    </form>
  )
}

export default ContactForm
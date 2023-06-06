import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
const form = useRef();
const sendEmail = (e) => {
e.preventDefault();
emailjs.sendForm('service_5vuauza', 'template_fdnnl56', form.current,
'EmSdUNQzQuxkUqGWx')
e.target.reset()
.then((result) => {
console.log(result.text)
},(error) =>{
console.log(error.text);
});
};
return (
<section id="contact">
<h5>Get in touch</h5>
<h2>Contact me</h2>
<form ref={form} onSubmit={sendEmail} className="form">
    <div className='form_container'>
    <h1>Contact Me</h1>
    <div className='inner_form'>
<label htmlFor='fullN'>Full Name* </label>
<input type="text" name='name' id='fullN' required/>
    </div>
    <div className='inner_form'>
    <label htmlFor='email'>Your Email*</label>
<input type="email" name='email'  id='email' required/>
</div>
<div className='inner_form'>
    <label htmlFor='message'>Message*</label>
<textarea name="message" id="message" required></textarea>
</div>
<button type="submit" className='btn btn-primary form_btn'>send message</button>
</div>
</form>
{/* </div> */}
</section>
)
}
export default Contact
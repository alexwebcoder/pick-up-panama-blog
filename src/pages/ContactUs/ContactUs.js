import emailjs from 'emailjs-com';
import { Form, Input, TextArea,Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import "./ContactUs.css"

const ContactUsForm = () => {
    const SERVICE_ID = "service_q7jfaw4";
    const TEMPLATE_ID = "template_220q62k";
    const USER_ID = "RpfI2tiLJvbu5BKwH";

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
        };
 return (
    <main className="margin contact-us-page">
      <figure className="contact-hero">
          <img className="no-right-click" src={process.env.PUBLIC_URL + '/images/coronado-beach-panama.JPG'} alt="Playa Coronado Panama"/>
          <figcaption>Playa Coronado Panama</figcaption>
      </figure>
      <div className="line-divider centered wide">
            <h1 className="diamond-text-box">
            <span className="left"></span>
            <span className="content caps centered">Contact</span>
            <span className="right"></span>
            </h1>
      </div>
      <section className="contact-us-form-container">
        <h2 className="centered">Always happy to hear from you.</h2>
        <Form className="contact-us-form" onSubmit={handleOnSubmit}>
          <Form.Field
            id='form-input-control-email-address'
            control={Input}
            name='user_email'
            placeholder='Email'
            required
            icon='mail'
            iconPosition='left'
          />
          <Form.Field
            id='form-input-control-last-name'
            control={Input}
            name='user_name'
            placeholder='Name'
            required
            icon='user circle'
            iconPosition='left'
          />
          <Form.Field
            id='form-textarea-control-opinion'
            control={TextArea}
            name='user_message'
            placeholder='Send in your questions, and comments, or just say hello.'
            rows='10'
            cols='30'
            required
          />
          <Button type='submit' className='contact-button'>Submit</Button>
        </Form>
      </section>
    </main>
 )

}



export default ContactUsForm
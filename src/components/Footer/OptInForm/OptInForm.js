import emailjs from 'emailjs-com';
import { Form, Input, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';

const ContactForm = () => {
    const SERVICE_ID = "service_q7jfaw4";
    const TEMPLATE_ID = "template_220q62k";
    const USER_ID = "RpfI2tiLJvbu5BKwH";

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
        };
 return (
    <>
       <div className="line-divider centered wide"> 
        </div>
      <div className='cta'><p>Subscribe to be the first to learn more about Panama.</p></div>
      <div className='form-container'>
          <Form name='form' onSubmit={handleOnSubmit}>
              <Form.Field
              id='form-input-control-email'
              control={Input}
              name='user_email'
              type='email'
              placeholder='Email'
              required
              icon='mail'
              iconPosition='left'
              />
              <Button id='send-form' className='optin-button' type='submit'>Subscribe</Button>
              <p id='alert-comment' className='alert-comment'>Email address must be valid</p>
          </Form>
      </div>
    </>
 )

}



export default ContactForm
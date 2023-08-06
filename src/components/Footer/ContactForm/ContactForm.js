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
    <>
       <hr/>
      <div className='cta'><h3>Subscribe to be the first to learn more about Panama</h3></div>
    <div className='form-container'>
        <Form name='form' onSubmit={handleOnSubmit}>
            <Form.Field
            id='form-input-control-email'
            control={Input}
            name='user_email'
            placeholder='Email'
            required
            icon='mail'
            iconPosition='left'
            />
            <Button id='send-form' className='optin-button' type='submit'>Subscribe</Button>
        </Form>
    </div>
    </>
 )

}



export default ContactForm
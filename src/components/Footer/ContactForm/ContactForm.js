import emailjs from 'emailjs-com';
import { Form, Input, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';



const validateEmail = (input) => {
  
  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {

    console.log("Valid email address!");
    
    document.form.user_email.focus();

    return true;

  } else {
    console.log(input.value)
    console.log("Invalid email address!");

    document.form.user_email.focus();

    return false;

  }
}

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
      <div className='cta'>Subscribe to be the first to learn more about Panama</div>
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
            <Button className='optin-button' type='submit'>Subscribe</Button>
        </Form>
    </div>
    </>
 )

}



export default ContactForm
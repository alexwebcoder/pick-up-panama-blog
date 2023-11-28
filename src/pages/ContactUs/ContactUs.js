import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import "./ContactUs.css";
import { TabTitle, Capitalize } from "../../utils/GeneralFunctions";
import { useEffect } from "react";

const ContactUsForm = () => {
  useEffect(() => {
    checkForm();
  }, []);
  TabTitle("Contact Pick Up Panama");
  Capitalize();

  const SERVICE_ID = "service_q7jfaw4";
  const TEMPLATE_ID = "template_9e6l439";
  const USER_ID = "RpfI2tiLJvbu5BKwH";

  const checkForm = (e) => {
    let canSubmit2 = false;
    const eJS_email2 = document.getElementById("form-input-control-email-address-2");
    const eJS_sendForm2 = document.getElementById("send-form-2");
    const alertComment2 = document.getElementById("alert-comment-2");
    const eJS_message = document.getElementById("form-textarea-control-opinion");
    const eJS_name = document.getElementById("form-input-control-last-name");

    function eJS_set_event_listenersContact() {
      eJS_email2.addEventListener("keyup", eJS_can_submit2);
      eJS_message.addEventListener("keyup", eJS_can_submit2);
      eJS_name.addEventListener("keyup", eJS_can_submit2);
    }

    eJS_set_event_listenersContact();

    //validate email address

    function eJS_validateEmail2(email2) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email2).toLowerCase());
    }

    function eJS_can_submit2() {
      //check the required field

      let email2 = eJS_email2.value.trim();
      let message = eJS_message.value.trim();
      let name = eJS_name.value.trim();
      
      if (eJS_validateEmail2(email2)) {
        alertComment2.style.visibility = "hidden";
        //maybe remove this email length condition
        if (message.length > 4 && email2.length > 4 && name.length > 1) {
          if (eJS_validateEmail2(email2)) {
            eJS_sendForm2.classList.add("activated");
            eJS_sendForm2.disabled = false;
            canSubmit2 = true;
          } else {
            eJS_disabled_submit2();
          }
        }
      } else {
        alertComment2.style.visibility = "visible";
        eJS_disabled_submit2();
      }
    }

    function eJS_disabled_submit2() {
      eJS_sendForm2.classList.remove("activated");
      eJS_sendForm2.disabled = true;
      canSubmit2 = false;
      alertComment2.style.visibility = "visible";
    }

    const hideError2 = () => {
      alertComment2.style.visibility = "hidden";
    };

    eJS_email2.addEventListener("blur", hideError2);
    eJS_message.addEventListener("blur", hideError2);
    eJS_name.addEventListener("blur", hideError2);
    document.addEventListener("click", hideError2);
    document.removeEventListener("click", hideError2);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <main className="margin contact-us-page">
      <figure className="contact-hero">
        <img
          className="no-right-click"
          src={process.env.PUBLIC_URL + "/images/contact/coronado-beach-panama.JPG"}
          alt="Playa Coronado Panama"
        />
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
            id="form-input-control-email-address-2"
            control={Input}
            name="user_email"
            placeholder="Email"
            required
            icon="mail"
            iconPosition="left"
          />
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            name="user_name"
            placeholder="Name"
            required
            icon="user circle"
            iconPosition="left"
          />
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            name="user_message"
            placeholder="Send in your questions, comments, or just say hello."
            rows="10"
            cols="30"
            required
          />
          <Button id="send-form-2" type="submit" className="contact-button">
            Submit
          </Button>
          <p id="alert-comment-2" className="alert-comment">
            Email must be valid,<br/>Name must have at least two characters,<br/> Message must have at least five characters
          </p>
        </Form>
      </section>
    </main>
  );
};

export default ContactUsForm;

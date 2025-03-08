import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactStyles.module.css";
import SocialContacts from "./SocialContacts";
import { validateContactForm } from "../../utils/validation";

export default function Contact() {
  const [success, setSuccess] = useState();
  //to do add succes message!
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const validationErrors = validateContactForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        () => {
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    }
  };

  return (
    <section className={`${styles.contact} section`} id="contacts">
      <h2 className="section_title">Get in touch</h2>
      <span className="section_subtitles">Contact Me</span>

      <div className={`${styles.contact_container} container grid`}>
        <SocialContacts />

        <div className={styles.contact_content}>
          <h3 className={styles.contact_title}>Let's work together</h3>

          <form className={styles.contact_form} ref={form} onSubmit={sendEmail}>
            <div className={styles.contact_form_div}>
              <label className={styles.contact_form_tag}>Name</label>
              <input
                type="text"
                name="name"
                className={styles.contact_form_input}
                placeholder="Insert your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className={styles.contact_form_div}>
              <label className={styles.contact_form_tag}>Mail</label>
              <input
                type="email"
                name="email"
                className={styles.contact_form_input}
                placeholder="Insert your e-mail"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div
              className={`${styles.contact_form_div} ${styles.contact_form_area}`}
            >
              <label className={styles.contact_form_tag}>Message</label>
              <textarea
                name="message"
                cols={30}
                rows={10}
                className={styles.contact_form_input}
                placeholder="Write your message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className={styles.errorMessage}>
              {errors.name && (
                <span className={styles.error}>{errors.name}</span>
              )}
              {errors.email && (
                <span className={styles.error}>{errors.email}</span>
              )}
              {errors.message && (
                <span className={styles.error}>{errors.message}</span>
              )}
            </div>
            <button type="submit" className="button button_flex">
              Send Message
              <i
                className={`${styles.data_icon} fa-regular fa-paper-plane`}
              ></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

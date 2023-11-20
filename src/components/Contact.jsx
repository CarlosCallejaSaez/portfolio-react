import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import styled from 'styled-components';

const StyledContact = styled.section`
  display:flex;
  flex-direction:column;
  justify-content:center;
`;

const StyledContactContainer = styled.div`
  width: 58%;
  display: grid;
  grid-template-columns: 30% 58%;
  gap: 12%;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media screen and (max-width: 600px) {
    width: var(--container-width-sm);
  }
`;

const StyledContactOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.2rem;
`;

const StyledContactOption = styled.article`
  background: var(--color-bg-variant);
  padding: 1.2rem;
  border-radius: 1.2rem;
  text-align: center;
  border: 1px solid transparent;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
  }
`;

const StyledContactOptionIcon = styled(MdOutlineEmail)`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const StyledContactOptionLink = styled.a`
  margin-top: 0.7rem;
  display: inline-block;
  font-size: 0.8rem;
`;

const StyledContactOptionTitle = styled.h4`
  font-weight: 500;
`;

const StyledContactOptionSubtitle = styled.h5`
  color: var(--color-light);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justifiy-content:center
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: 2px solid var(--color-primary-variant);
  resize: none;
  color: var(--color-white);
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: 2px solid var(--color-primary-variant);
  resize: none;
  color: var(--color-white);
`;

const StyledFormMessage = styled.span`
  font-size: 0.8rem;
`;

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_6jyo8zc',
        'template_mkh2lvr',
        formRef.current,
        'CwI4vTD03nxVOkBfa'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <StyledContact id="contact">
      <h3>Get In Touch</h3>
      <h3>
        I will reply ASAP if a valid email is
        provided 😊
      </h3>
      <h2>Contact Me</h2>
      <StyledContactContainer className="container contact__container">
        <StyledContactOptions className="contact__options">
          <StyledContactOption className="contact__option">
            <StyledContactOptionIcon className="contact__option-icon" />
            <StyledContactOptionTitle>Email</StyledContactOptionTitle>
            <StyledContactOptionSubtitle>carloscallejasez@gmail.com</StyledContactOptionSubtitle>
            <StyledContactOptionLink href="mailto:carloscallejasez@gmail.com">Send a message</StyledContactOptionLink>
          </StyledContactOption>
        </StyledContactOptions>
        <StyledForm ref={formRef} onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <StyledInput
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <StyledTextarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></StyledTextarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <StyledFormMessage>Thanks for your time 😃</StyledFormMessage>}
        </StyledForm>
      </StyledContactContainer>
    </StyledContact>
  );
};

export default Contact;

import React from 'react';

const Contact = () => {
  return (
    <>
      <article></article>
      <h1 style={{ paddingLeft: '20px', paddingRight: '20px', marginBottom: '15px', marginTop: '15px', paddingTop: '0px', paddingBottom: '0px' }}>
        <strong>
          <span style={{ color: 'var(--tw-prose-bold)', backgroundColor: 'rgba(247, 247, 248, 0)' }}>Contact Us</span>
        </strong>
      </h1>
      <article></article>
      <p style={{ paddingLeft: '20px', paddingRight: '20px', paddingBottom: '0px', marginBottom: '15px', paddingTop: '0px' }}>
        <span style={{ color: 'rgb(55, 65, 81)', backgroundColor: 'rgba(247, 247, 248, 0)' }}>
          Thank you for your interest in ReactLinkify! We value your feedback, inquiries, and suggestions. Our team is here to assist you with any questions or concerns you may have. Please feel free to reach out to us using the contact information below:
        </span>
        <br/><br/>
        <span style={{ color: 'rgb(55, 65, 81)', backgroundColor: 'rgba(255, 255, 255, 0)' }}>
          We appreciate your feedback and strive to improve ReactLinkify based on user suggestions. Please share your thoughts, ideas, or concerns by emailing&nbsp;
        </span>
        <a href="mailto:feedback@reactlinkify.com" target="_new">
          <span style={{ color: 'var(--tw-prose-links)', backgroundColor: 'rgba(255, 255, 255, 0)' }}>feedback@reactlinkify.com</span>
        </a>
        <span style={{ color: 'rgb(55, 65, 81)', backgroundColor: 'rgba(255, 255, 255, 0)' }}>.</span>
        <br/><br/>
        <span style={{ color: 'rgb(55, 65, 81)', backgroundColor: 'rgba(255, 255, 255, 0)' }}>
          Please note that response times may vary depending on the nature of your inquiry. We strive to provide prompt and helpful responses to ensure your satisfaction. Whether you have a question about ReactLinkify, need technical support, or want to explore potential partnerships, we look forward to hearing from you.
        </span>
        <br/><br/>
        <span style={{ color: 'rgb(55, 65, 81)', backgroundColor: 'rgba(255, 255, 255, 0)' }}>
          Your input is invaluable to us as we continue to enhance and optimize ReactLinkify to meet your needs. Thank you for choosing ReactLinkify. We appreciate your trust in our platform, and we are excited to assist you in creating remarkable web applications.
        </span>
      </p>
    </>
  );
};

export default Contact;
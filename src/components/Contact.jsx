import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

const Contact = ({ name, profileImage, isOnline }) => {
  return (
    <div className="contact">
      <img src={profileImage} alt={`${name}'s profile`} className="profile-image" />
      <div className="contact-info">
        <h2 className="contact-name">{name}</h2>
        <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
      </div>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Contact;

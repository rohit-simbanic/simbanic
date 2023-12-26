import React from "react";

const GoogleMap = () => {
  return (
    <div className="responsive-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5835009397156!2d72.6734110747707!3d23.039060015713677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8766804bcb17%3A0x9aeabc15d8c93b33!2sRhythm%20Plaza!5e0!3m2!1sbn!2sin!4v1703596258641!5m2!1sbn!2sin"
        width="100%"
        height="450"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;

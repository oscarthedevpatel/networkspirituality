import React, { useState } from "react";
import "./centralNav.css"; // Import your CSS file for styling

const ImageGallery = () => {
  const [isBlurred, setIsBlurred] = useState(false);

  const galleryImages = [
    { src: process.env.PUBLIC_URL + "/images/girl1.png", text: "Telegram" },
    { src: process.env.PUBLIC_URL + "/images/girl2.png", text: "Chart" },
    { src: process.env.PUBLIC_URL + "/images/girl3.png", text: "Twitter" },
    // { src: process.env.PUBLIC_URL + "/images/girl4.png", text: "Knowledge" },
  ];

  const handleImageClick = () => {
    setIsBlurred((prevIsBlurred) => !prevIsBlurred);
  };

  const handleThumbnailClick = () => {
    // Handle thumbnail click logic here
    // For example, you could navigate to a new image or perform other actions
    setIsBlurred(false);

  };

  return (
    <div>
      <div
        className={`image-container ${isBlurred ? "blurred" : ""}`}
        onClick={handleImageClick}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/logo.png"}
          alt="Gallery"
        />
        
      </div>
      {isBlurred && (
        <div className="thumbnails">
          {galleryImages.map((image, index) => (
            <div key={index} className="thumbnail-wrapper" onClick={() => handleThumbnailClick(index)}>
              <img
                src={image.src}
                alt={`Thumbnail ${index + 1}`}
              />
              <p className="thumbnail-text">{image.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;

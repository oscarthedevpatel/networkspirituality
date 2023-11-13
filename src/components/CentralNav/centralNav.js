import React, { useState } from "react";
import "./centralNav.css"; // Import your CSS file for styling

const ImageGallery = () => {
  const [isBlurred, setIsBlurred] = useState(false);

  const galleryImages = [
    process.env.PUBLIC_URL + "/images/girl1.png",
    process.env.PUBLIC_URL + "/images/girl2.png",
    process.env.PUBLIC_URL + "/images/girl3.png",
    process.env.PUBLIC_URL + "/images/girl4.png",
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
        <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Gallery" />
      </div>
      {isBlurred && (
        <div className="thumbnails">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={handleThumbnailClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;

import React, { useState } from "react";
import "./centralNav.css"; // Import your CSS file for styling

const ImageGallery = () => {
  const [isBlurred, setIsBlurred] = useState(false);

  const galleryImages = [
    { src: process.env.PUBLIC_URL + "/images/girl1.png", text: "Telegram", link: "https://t.me/brospirit" },
    { src: process.env.PUBLIC_URL + "/images/girl2.png", text: "Chart", link: "https://www.dextools.io/app/en/ether/pair-explorer/0x3b8cebbaece24136f7e0f0d6863e18ee048152c0" },
    { src: process.env.PUBLIC_URL + "/images/girl3.png", text: "Twitter", link: "https://twitter.com/brospirit444" },
    // { src: process.env.PUBLIC_URL + "/images/girl4.png", text: "Knowledge", link: "/knowledge" },
  ];

  const handleImageClick = () => {
    setIsBlurred((prevIsBlurred) => !prevIsBlurred);
  };

  const handleThumbnailClick = (index) => {
    const selectedImage = galleryImages[index];
    window.open(selectedImage.link, '_blank'); // Open the link in a new tab or window
    setIsBlurred(false);
  };

  return (
    <div>
      <div
        className={`image-container ${isBlurred ? "blurred" : ""}`}
        onClick={handleImageClick}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/newLogo.png"}
          alt="Gallery"
          className="mainImage"
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

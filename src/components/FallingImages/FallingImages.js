import React, { useEffect } from "react";

const ImageGenerator = () => {
  function generatePills() {
    const pillMax = 75;
    let pillCounter = 0;

    function createPillWithDelay() {
      if (pillCounter < pillMax) {
        const pill = document.createElement("img");
        pillCounter++;
        pill.src = process.env.PUBLIC_URL + "/images/burger.png";
        pill.style.position = "fixed";
        pill.style.top = "0";
        pill.style.left = `${Math.random() * window.innerWidth}px`;
        pill.style.maxWidth = `${Math.floor(Math.random() * 21) + 15}%`;
        pill.style.height = "auto";

        document.body.appendChild(pill);

        const duration = Math.random() * 1 + 0.5; // Random duration between 0.5 and 1.5 seconds

        const animation = pill.animate(
          [
            { transform: "translateY(0)" },
            { transform: `translateY(calc(100vh - ${pill.offsetHeight}px))` },
          ],
          {
            duration: duration * 1000, // Convert duration to milliseconds
            easing: "linear",
            fill: "forwards",
          }
        );

        animation.onfinish = () => {
          pill.remove();
        };

        const delay = Math.random() * 20 + 10; // Random delay between 10ms and 30ms
        setTimeout(createPillWithDelay, delay);
      }
    }

    createPillWithDelay();
  }

  useEffect(() => {
    setTimeout(() => {
      generatePills();
    }, Math.random() * 30 + 10); // Generate the first pill after a random delay (between 10ms and 40ms)
  }, []);

  return null;
};

export default ImageGenerator;

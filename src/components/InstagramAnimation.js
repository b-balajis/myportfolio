import lottie from 'lottie-web';
import React from 'react';
import animationData from '../assets/animations/instagram.json';
import instagramImage from '../assets/icons/instagram.svg'; // Replace with the correct path to the static Instagram image

const InstagramAnimation = () => {
  const [animationInstance, setAnimationInstance] = React.useState(null);

  // Function to handle the animation play on hover
  const handleMouseEnter = () => {
    if (animationInstance) {
      animationInstance.play();
    }
  };

  // Function to handle stopping the animation when not hovering
  const handleMouseLeave = () => {
    if (animationInstance) {
      animationInstance.stop();
    }
  };

  // Initialize the animation on component mount
  React.useEffect(() => {
    const anim = lottie.loadAnimation({
      container: document.getElementById('lottie-container'),
      renderer: 'svg',
      loop: true,
      autoplay: false, // We don't autoplay on mount
      animationData: animationData,
    });

    setAnimationInstance(anim);

    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <div
      id="lottie-container"
      style={{
        width: '100%',
        height: '100%',
        backgroundImage: `url(${instagramImage})`,
        backgroundSize: 'cover',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    ></div>
  );
};

export default InstagramAnimation;

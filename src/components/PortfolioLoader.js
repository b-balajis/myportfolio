import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const PortfolioLoader = ({ onComplete }) => {
  const [show, setShow] = useState(true);
  const [text, setText] = useState("");
  const fullText =
    "Heello! Loading awesomeness... Get ready to explore Balaji's portfolio.";

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index >= fullText.length) {
        clearInterval(typingInterval);
        return;
      }
      setText((prev) => prev + fullText.charAt(index));
      index++;
    }, 90);

    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 600);
    }, fullText.length * 90 + 1000); // adjust duration based on text

    return () => {
      clearInterval(typingInterval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black text-white flex items-center justify-center z-50 font-serif sm:text-3xl"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <p className="text-4xl">
            {text.split("Balaji").map((part, index) => (
              <span key={index}>
                {part}
                {index < text.split("Balaji").length - 1 && (
                  <span className="text-blue-600 font-bold">Balaji</span>
                )}
              </span>
            ))}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PortfolioLoader;

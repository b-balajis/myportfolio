import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const PortfolioLoader = ({ onComplete }) => {
  const [show, setShow] = useState(true);
  const [text, setText] = useState("");
  const fullText = "Weelcome, I'm Balaji 🚀";

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index >= fullText.length) {
        clearInterval(typingInterval);
        return;
      }
      setText((prev) => prev + fullText.charAt(index));
      index++;
    }, 80); // typing speed

    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 600); // wait for fade-out
    }, fullText.length * 80 + 1200); // extra pause before fade-out

    return () => {
      clearInterval(typingInterval);
      clearTimeout(timer);
    };
  }, [onComplete, fullText]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black text-white flex items-center justify-center z-50 font-serif"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <p className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-wide">
            {text.split("Balaji").map((part, index) => (
              <span key={index}>
                {part}
                {index < text.split("Balaji").length - 1 && (
                  <span className="text-blue-500 font-extrabold">
                    Balaji
                  </span>
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

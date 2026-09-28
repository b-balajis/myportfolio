import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const PortfolioLoader = ({ onComplete }) => {
  const [show, setShow] = useState(true);
  const [text, setText] = useState("");

  const fullText = "Buuilding scalable software 🚀";

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index >= fullText.length) {
        clearInterval(typingInterval);
        return;
      }

      setText((prev) => prev + fullText.charAt(index));
      index++;
    }, 55);

    const timer = setTimeout(
      () => {
        setShow(false);

        setTimeout(() => {
          onComplete();
        }, 500);
      },
      fullText.length * 55 + 800,
    );

    return () => {
      clearInterval(typingInterval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black
            text-white
            font-serif
          "
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: "easeOut",
            },
          }}
        >
          <div className="text-center px-6">
            {/* Small brand indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="
                mx-auto
                mb-6
                h-3
                w-3
                rounded-full
                bg-blue-500
                shadow-[0_0_20px_rgba(59,130,246,0.8)]
              "
            />

            {/* Typing text */}
            <p
              className="
                text-xl
                sm:text-3xl
                md:text-4xl
                font-bold
                tracking-wide
              "
            >
              {text}
              <span className="text-blue-500 animate-blink">|</span>
            </p>

            {/* Name */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
              }}
              className="
                mt-4
                text-sm
                md:text-base
                text-gray-500
                tracking-widest
                uppercase
              "
            >
              Balaji Bheemavarapu
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PortfolioLoader;

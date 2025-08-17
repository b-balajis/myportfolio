import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function VisitorCounter() {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        const fetchVisits = async () => {
            try {
                const res = await fetch("https://api.countapi.xyz/hit/bbalajis.com/visits");
                const data = await res.json();
                setCount(data.value);
            } catch (error) {
                console.warn("Visitor counter not available in local dev:", error);
                setCount(1234); // 👈 fallback dummy number for local testing
            }
        };

        fetchVisits();
    }, []);

    return (
        <div
            ref={ref}
            className="mt-4 text-sm text-gray-400 flex justify-center items-center gap-2"
        >
            👀 Visitors:
            <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="font-semibold text-blue-400"
            >
                {count}
            </motion.span>
        </div>
    );
}

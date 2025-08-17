import { doc, getDoc, increment, setDoc, updateDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { db } from "../firebaseConfig";

export default function VisitorCounter() {
    const [visits, setVisits] = useState(null);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (window.location.hostname !== "bbalajis.com") {
            console.log("Skipping visitor counter on non-production domain:", window.location.hostname);
            return;
        }

        const updateVisitorCount = async () => {
            try {
                const counterRef = doc(db, "stats", "visitors");
                const snapshot = await getDoc(counterRef);

                if (snapshot.exists()) {
                    await updateDoc(counterRef, { count: increment(1) });
                    const newSnap = await getDoc(counterRef);
                    setVisits(newSnap.data().count);
                } else {
                    await setDoc(counterRef, { count: 1 });
                    setVisits(1);
                }
            } catch (err) {
                console.error("Firestore error:", err);
            }
        };

        updateVisitorCount();
    }, []);


    return (
        <div
            ref={ref}
            className="mt-4 text-sm flex justify-center items-center gap-2"
        >
            Visitors:
            <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="font-semibold text-blue-200"
            >
                <span className="font-bold">
                    {visits !== null ? visits : "Loading…"}
                </span>
            </motion.span>
        </div>
    );
}

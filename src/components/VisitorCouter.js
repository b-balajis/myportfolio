import { doc, runTransaction } from "firebase/firestore";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { db } from "../firebaseConfig";

const VISITOR_KEY = "bbalajis_visitor_counted";
const VISITOR_COOLDOWN = 24 * 60 * 60 * 1000; // 24 hours

export default function VisitorCounter() {
  const [visits, setVisits] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    const hostname = window.location.hostname;

    // Only count visitors on production
    const isProduction =
      hostname === "bbalajis.com" || hostname === "www.bbalajis.com";

    if (!isProduction) {
      console.log("Visitor counter disabled on:", hostname);
      return;
    }

    const updateVisitorCount = async () => {
      try {
        const lastCounted = localStorage.getItem(VISITOR_KEY);

        const counterRef = doc(db, "stats", "visitors");

        // Already counted this browser within 24 hours
        if (
          lastCounted &&
          Date.now() - Number(lastCounted) < VISITOR_COOLDOWN
        ) {
          const currentCount = await runTransaction(db, async (transaction) => {
            const snapshot = await transaction.get(counterRef);

            if (!snapshot.exists()) {
              return 0;
            }

            return Number(snapshot.data().count) || 0;
          });

          setVisits(currentCount);
          return;
        }

        // New visitor / visitor after 24 hours
        const newCount = await runTransaction(db, async (transaction) => {
          const snapshot = await transaction.get(counterRef);

          const currentCount = snapshot.exists()
            ? Number(snapshot.data().count) || 0
            : 0;

          const nextCount = currentCount + 1;

          transaction.set(counterRef, { count: nextCount }, { merge: true });

          return nextCount;
        });

        setVisits(newCount);

        // Remember this browser for 24 hours
        localStorage.setItem(VISITOR_KEY, Date.now().toString());
      } catch (error) {
        console.error("Visitor counter error:", error);

        // Don't leave "Loading..." forever
        setVisits(null);
      }
    };

    updateVisitorCount();
  }, []);

  return (
    <div ref={ref} className="flex items-center justify-center gap-2">
      <span>Visitors:</span>

      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="font-semibold text-blue-200"
      >
        {visits !== null ? visits : "Loading..."}
      </motion.span>
    </div>
  );
}

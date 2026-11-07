"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

export default function ToggleBox() {
  const [show, setShow] = useState(true);

  return (
    <div className="p-4">
      <Button onClick={() => setShow((prev) => !prev)}>
        {show ? "Hide" : "Show"}
      </Button>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
            className="mt-4 rounded-lg bg-green-500 p-6 text-white"
          >
            Main show/hide hota hoon!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
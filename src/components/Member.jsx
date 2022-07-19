import React from "react";
import { motion } from "framer-motion";

function Member({ mem }) {
    return (
        <motion.div
            Layout
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
        >
            <div className="bg-slate-300 w-40 h-44 overflow-hidden rounded-sm">
                <img
                    className=" w-40 h-44 object-cover"
                    src={mem.srcImg}
                    alt="member"
                />
            </div>
            <h2 className="mt-2 font-bold text-xs">{mem.name}</h2>
        </motion.div>
    );
}

export default Member;

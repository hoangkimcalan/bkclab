import React from "react";
import FilterMember from "./FilterMember";
import { useState, useEffect } from "react";
import { datamembers } from "../utils/data";
import Member from "./Member";
import { motion } from "framer-motion";



function MemberContainer() {
    const [popular, setPopular] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activeGenre, setActiveGenre] = useState(0);

    useEffect(() => {
        setPopular(datamembers);
        setFiltered(datamembers);
    }, [datamembers]);

    console.log("activeGenre ", activeGenre);
    console.log("filtered ", filtered);
    return (
        <div className="md:px-44 mt-10 w-full h-auto">
            <div className="h-64 w-full bg-slate-100">
                something fucking here
            </div>

            <div className="mt-16 w-full h-auto flex flex-row gap-16">
                <div className="basis-1/4 bg-white">
                    <FilterMember
                        popular={popular}
                        setFiltered={setFiltered}
                        activeGenre={activeGenre}
                        setActiveGenre={setActiveGenre}
                    />
                </div>
                <motion.div
                    Layout
                    initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                    className="basis-3/4 grid grid-cols-4 gap-4"
                >
                    {filtered.map((mem, key) => (
                        <Member key={mem.id} mem={mem} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default MemberContainer;

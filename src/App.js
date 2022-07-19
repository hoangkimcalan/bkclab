import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header, MainContainer, Footer } from "./components";
import MemberContainer from "./components/MemberContainer";
import BsignProject from "./components/project/BsignProject";
import B4EProject from "./components/project/B4EProject";

function App() {
    return (
        <AnimatePresence exitBeforeEnter>
            <div className="w-full h-auto flex flex-col bg-white">
                <Header />

                <main className="mt-16 md:mt-16 md:px-16 py-4 w-full">
                    <Routes>
                        <Route path="/" element={<MainContainer />} />
                        <Route path="/members" element={<MemberContainer />} />
                        <Route path="/bsign" element={<BsignProject />} />
                        <Route path="/b4e" element={<B4EProject />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </AnimatePresence>
    );
}

export default App;

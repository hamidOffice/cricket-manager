import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Manager from '../models/ManagerModel';

const Home = () => {
    const navigate = useNavigate();

    // Navigate to different sections
    const navigateTo = (page: string) => {
        navigate(`/${page}`);
    };

    return (
        <div className="min-h-screen flex flex-col gap-5 md:flex-row justify-center items-center bg-green-950 text-white p-6">
            {/* Left Section: 3D Manager Model */}
                  
                    {/* Placeholder for 3D Model */}
                    <Manager />
              
 
            {/* Right Section: Navigation Boxes - Two Rows */}
            <div className="grid grid-rows-2 gap-5 sm:flex-row sm:flex-1 justify-center items-center sm:space-x-4 sm:space-y-0 space-y-4    ">
                <div className="flex flex-col sm:flex-row sm:w-full justify-center items-center sm:space-x-4 sm:space-y-0 space-y-4">
                    <motion.div
                        className="w-full sm:w-[300px] p-6 bg-white text-black rounded-lg shadow-lg text-center cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigateTo('players')}
                    >
                        Players
                    </motion.div>

                    <motion.div
                        className="w-full sm:w-[300px] p-6 bg-white text-black rounded-lg shadow-lg text-center cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigateTo('matches')}
                    >
                        Matches
                    </motion.div>
                </div>

                <div className="flex flex-col sm:flex-row sm:w-full justify-center items-center sm:space-x-4 sm:space-y-0 space-y-4">
                    <motion.div
                        className="w-full sm:w-[300px] p-6 bg-white text-black rounded-lg shadow-lg text-center cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigateTo('dashboard')}
                    >
                        Dashboard
                    </motion.div>

                    <motion.div
                        className="w-full sm:w-[300px] p-6 bg-white text-black rounded-lg shadow-lg text-center cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigateTo('sponsors')}
                    >
                        Sponsors
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Home;

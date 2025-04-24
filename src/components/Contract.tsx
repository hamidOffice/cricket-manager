import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { get, set } from 'idb-keyval';
import { useNavigate } from 'react-router-dom';

type Country = {
    name: string;
    code: string;
    budget: number;
    contractDuration: number;
    currencySymbol: string;
};

const Contract = () => {
    const navigation = useNavigate();
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

    useEffect(() => {
        const fetchCountry = async () => {
            const savedCountry = await get('selectedCountry');
            if (savedCountry) {
                setSelectedCountry(savedCountry);
            }
        };
        fetchCountry();
    }, []);

    const handleSignContract = async () => {
        await set('contractSigned', true);
        navigation('/Home');
    };

    // Calculate manager's salary (e.g., 10% of the country's budget)
    const managerSalary = selectedCountry ? Math.floor(selectedCountry.budget * 0.4) : 0;

    return (
        <motion.div
            className="min-h-screen flex flex-col justify-center items-center bg-green-950 text-white p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {selectedCountry ? (
                <motion.div
                    className="max-w-3xl w-full bg-white text-gray-900 rounded-lg p-8 shadow-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                        Contract Details for {selectedCountry.name}
                    </h2>
                    <div className="space-y-6">
                        <div className="bg-green-100 p-6 rounded-lg shadow-inner">
                            <h3 className="text-xl font-semibold text-gray-700">Country: {selectedCountry.name}</h3>
                            <p className="text-lg text-gray-600 mt-2">
                                <strong>Contract Duration:</strong> {selectedCountry.contractDuration} Year(s)
                            </p>
                            <p className="text-lg text-gray-600">
                                <strong>Yearly Budget:</strong> {selectedCountry.currencySymbol}{selectedCountry.budget.toLocaleString()}
                            </p>
                            {/* Manager's Salary */}
                            <p className="text-lg text-gray-600">
                                <strong>Manager's Salary:</strong> {selectedCountry.currencySymbol}{managerSalary.toLocaleString()}
                            </p>
                        </div>

                        <motion.button
                            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg mt-6 transition transform hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleSignContract}
                        >
                            Sign Contract
                        </motion.button>
                    </div>
                </motion.div>
            ) : (
                <motion.h2
                    className="text-2xl font-semibold text-center text-gray-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    No country selected yet.
                </motion.h2>
            )}
        </motion.div>
    );
};

export default Contract;

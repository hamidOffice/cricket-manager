import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { get, set } from 'idb-keyval';
import { countries } from '../lib/DummyData';
import Loading from './Loading';


const SelectCountry = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true);

      const savedCountry = await get('selectedCountry');
      const contract = await get('contractSigned');
      if (savedCountry && contract) {
        navigate("/Home");
      }
      setLoading(false);
    };

    fetchCountry();
  }, []);
if (loading) {
  return <Loading />;
}

  const handleSelect = async (country: { name: string; code: string }) => {
 
    await set('selectedCountry', country);
    navigate("/contract");
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center  items-center bg-green-950 text-white p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-3xl text-center font-bold mb-6">🌍 Select Your Country</h1>

      <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {countries.map((c, i) => (
          <motion.div
            key={c.name}
            className="bg-green-800 p-4 rounded-xl shadow-md cursor-pointer hover:bg-green-700 text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSelect(c)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <img
              src={`https://flagcdn.com/w80/${c.code}.png`}
              alt={c.name}
              className="mx-auto mb-2 rounded"
            />
            <p className="text-lg font-semibold">{c.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SelectCountry;

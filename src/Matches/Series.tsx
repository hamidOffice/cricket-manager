import { nav } from 'framer-motion/client';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface SeriesData {
  seriesNumber: number;
  win: number;
  lose: number;
  opponentCountry: string;
  matchesPlayed: number;
  totalMatches: number;
}

export const Series: React.FC = () => {
  const [series, setSeries] = useState<SeriesData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  useEffect(() => {
    const storedSeries = localStorage.getItem("cricketSeries");

    if (storedSeries) {
      setSeries(JSON.parse(storedSeries));
      setLoading(false);
    } else {
      createRandomSeries();
    }
  }, []);

   const selectedCountry = localStorage.getItem("selectedCountry");
  const selectedCountryName = selectedCountry ? JSON.parse(selectedCountry).name : "";

  // Function to create a new random series and save it to localStorage
  const createRandomSeries = () => {
    const countries = [
      "Pakistan", "India", "Australia", "Sri Lanka", "Zimbabwe",
      "New Zealand", "South Africa", "England"
    ];

    // Exclude the selected country as opponent
    const filteredCountries = countries.filter(country => country !== selectedCountryName);

    const randomOpponent = filteredCountries[Math.floor(Math.random() * filteredCountries.length)];

    const totalMatches = Math.random() > 0.5 ? 3 : 5; // Randomly decide if it's 3 or 5 matches

    const newSeries: SeriesData = {
      seriesNumber: Date.now(),
      win: 0,
      lose: 0,
      opponentCountry: randomOpponent,
      matchesPlayed: 0,
      totalMatches: totalMatches,
    };

    localStorage.setItem("cricketSeries", JSON.stringify(newSeries));
    setSeries(newSeries);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col gap-5 justify-center items-center bg-green-950 text-white p-6">
      {loading ? (
        <div className="text-xl">Loading...</div>
      ) : (
        <div className="bg-green-800 p-6 rounded-xl shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-bold text-center mb-5">Cricket Series</h1>
          <div className="text-center text-lg">
            <p><strong>Opponent Country:</strong> {series?.opponentCountry}</p>
            <p><strong>Matches Played:</strong> {series?.matchesPlayed} / {series?.totalMatches}</p>
            <p><strong>Wins:</strong> {series?.win}</p>
            <p><strong>Losses:</strong> {series?.lose}</p>
          </div>
          <div className="flex justify-center mt-5">
            <button
              onClick={() => navigate("/selectPlayers")}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md text-xl"
            >
              Start Series
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

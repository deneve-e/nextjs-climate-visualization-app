'use client'

import { useState, useEffect } from "react";
import { fetchStations } from "../services/http/fetch-data";
import { Station } from "../types";

const StationsList: React.FC = () => {
  const [stations, setStations] = useState<Station[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getStations = async () => {
      try {
        const data = await fetchStations();
        setStations(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch stations");
        setLoading(false);
      }
    };

    getStations()
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Stations</h1>
      <ul>
        {stations.map((station) => (
          <li key={station.id}>
            {station.name} ({station.station_code})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StationsList;

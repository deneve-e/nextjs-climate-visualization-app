"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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

    getStations();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section>
      <h2 className="mb-2">Pick a Station to visualize historical weather data (monthly, average).</h2>
      <ul>
        {stations.map((station) => (
          <li key={station.id}>
            <Link href={`/stations/${encodeURIComponent(station.id)}`}>
            {station.name} ({station.station_code})
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StationsList;

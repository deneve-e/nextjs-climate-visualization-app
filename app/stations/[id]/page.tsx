"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { fetchTemperatureRecords } from "../../services/http/fetch-data";
import { TemperatureRecord } from "../../types";

const StationDetails: React.FC = () => {
  const { id: stationId } = useParams();

  const [records, setRecords] = useState<TemperatureRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log(stationId);

    if (!stationId) return;

    const getTemperatureRecords = async () => {
      try {
        const data = await fetchTemperatureRecords(stationId as string);
        console.log(data);

        setRecords(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch temperature records");
        setLoading(false);
      }
    };

    getTemperatureRecords();
  }, [stationId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section>
      <h2 className="mb-2">Temperature Records for Station {stationId}</h2>
      {records.map((record) => (
        <li key={record.id}>
          {record.date}, {record.tmax ? record.tmax : 'null'}, {record.tmin ? record.tmin : 'null'}
        </li>
      ))}
    </section>
  );
};

export default StationDetails;

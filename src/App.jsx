import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    try {
      const response = await axios.get(
        "https://xcountries-backend.labs.crio.do/all"
      );
      setCountries(response.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <div className="App">
      {countries.map((country) => (
        <div key={country.abbr} className="country-card">
          <img src={country.flag} alt={country.name} width="100%" />
          <p>{country.name}</p>
        </div>
      ))}
    </div>
  );
}

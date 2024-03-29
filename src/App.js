import React, { useState, useEffect } from "react";
import axios from "axios";
import { Autocomplete, Box, Stack, TextField } from "@mui/material";
import Weather from "./component/Weather";

import "./App.css";

const API_KEY = "4b68d9360d3540009b060044242803";
const API_URL_BASE = "https://api.weatherapi.com/v1/current.json";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (city !== "") {
      let timerId = setTimeout(() => {
        fetchWeatherData(city);
      }, 500);
      return () => clearTimeout(timerId);
    }
  }, [city]);

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(
        `${API_URL_BASE}?key=${API_KEY}&q=${city}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleCityChange = (e) => {
    const { value } = e.target;
    setCity(value);
  };

  return (
    <div>
      <Box
        className="appHeader"
        component="section"
        my={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={2}
        p={2}
        m={2}
        bgcolor="blue"
        color="white"
        sx={{ p: 2, border: "1px solid grey", fontSize: "24px" }}
      >
        Weather App
      </Box>
      <Box
        className="appHeader"
        component="section"
        my={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={2}
        p={2}
        m={2}
        sx={{ p: 2, fontSize: "24px" }}
      >
        <Stack spacing={2} sx={{ width: 300 }}>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={[]}
            clearIcon={null}
            renderInput={(params) => (
              <TextField
                onChange={handleCityChange}
                {...params}
                label="Enter location"
              />
            )}
          />
        </Stack>
      </Box>
      {city !== "" ? <Weather weatherData={weatherData} /> : <div></div>}
    </div>
  );
};

export default App;

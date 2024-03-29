import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import React from "react";
import "./Weather.css";

const Weather = ({ weatherData }) => {
  if (!weatherData || !weatherData.location || !weatherData.current) {
    return (
      <Box
        display="flex"
        alignItems="center"
        flexDirection={"column"}
        justifyContent="center"
      >
        <Typography variant="h5" color="red">
          No matching location found
        </Typography>
        <CircularProgress style={{ marginTop: "20px" }} />
      </Box>
    );
  }

  const name = weatherData?.location?.name;
  const country = weatherData?.location?.country;
  const imageIcon = weatherData?.current?.condition?.icon;
  const temperature_c = weatherData?.current?.temp_c;
  const temperature_f = weatherData?.current?.temp_f;
  const condition = weatherData?.current?.condition?.text;
  const wind_speed = weatherData?.current?.wind_kph;
  const humidity = weatherData?.current?.humidity;
  const cloud_Coverage = weatherData?.current?.cloud;
  const last_updated = weatherData?.current?.last_updated;

  return (
    <div>
      <div className="city">
        <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
          {name}, {country}
        </Typography>
      </div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: 300,
            height: 250,
          },
        }}
      >
        <Card elevation={3}>
          <CardContent>
            <div className="weather-item">
              <img src={imageIcon} alt="weatherIcon" />
              <div className="weather-details">
                <div className="detail">
                  <p>Temperature</p>
                  <p>
                    {temperature_c}°C/{temperature_f}°F
                  </p>
                </div>
                <div className="detail">
                  <p>Condition</p>
                  <p>{condition}</p>
                </div>
                <div className="detail">
                  <p>Wind Speed</p>
                  <p>{wind_speed}km/h</p>
                </div>
                <div className="detail">
                  <p>Humidity</p>
                  <p>{humidity}%</p>
                </div>
                <div className="detail">
                  <p>cloud Coverage</p>
                  <p>{cloud_Coverage}%</p>
                </div>
                <div className="detail">
                  <p>Last Update</p>
                  <p>{last_updated}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Weather;

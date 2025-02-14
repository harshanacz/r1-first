import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import.meta.env.WEATHER_API_KEY;

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.weatherapi.com/v1/current.json";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [haveValues, setHaveValues] = useState(false);
  const [weatherValue, setWeatherValue] = useState("");

  const getWeather = async () => {
    let city = "landon";
    if (inputValue != "") {
      city = inputValue;
    }

    try {
      const response = await axios.get(BASE_URL, {
        params: {
          key: API_KEY,
          q: city,
        },
      });
      const value = response.data.current.temp_c;
      setWeatherValue(value);
      setHaveValues(true);

      console.log(response.data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  };

  return (
    <div style={containerStyle}>
      {haveValues && (
        <div>
          <h1>Value: {weatherValue}</h1>
          <br />
        </div>
      )}
      <h1>{inputValue}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Input city name"
      />
      <button style={buttonStyle} onClick={getWeather}>
        Get Weather
      </button>
      <ToastContainer />{" "}
    </div>
  );
}

export default App;

import axios from "axios";
import { useEffect, useState } from "react";
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

      if (response.status === 200) {
        const value = response.data.current.temp_c;
        setWeatherValue(value);
        setHaveValues(true);
        toast(`The temperature in ${city} is ${value}°C`);
        console.log(response.data);
      } else {
        throw new Error(`Unexpected status code: ${response.status}`);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          toast.error("Bad request. Please check the city name.");
        } else if (error.response.status === 404) {
          toast.error("City not found. Please enter a valid city name.");
        } else {
          toast.error(`Error: ${error.response.status} - ${error.response.data.message}`);
        }
      } else if (error.request) {
        toast.error("No response from the server. Please try again later.");
      } else {
        toast.error(`Error: ${error.message}`);
      }
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

  useEffect(() => {
    getWeather();
}, [])

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

import axios from 'axios';
import.meta.env.WEATHER_API_KEY

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

function App() {
  const getWeather = async () => {
    const city = "london";
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          key: API_KEY,
          q: city
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  };


  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={getWeather}>Get Weather</button>
    </div>
  );
}

export default App;
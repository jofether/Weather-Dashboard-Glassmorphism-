import React, { useState } from 'react';

function App() {
  const [activeLocation, setActiveLocation] = useState(0);

  const locations = [
    {
      name: 'Batangas City',
      country: 'Philippines',
      temp: 28,
      condition: 'Partly Cloudy',
      icon: '⛅',
      wind: 12,
      humidity: 64,
      rain: 10,
      feelsLike: 30,
      uv: 6,
      visibility: 10,
      pressure: 1013
    },
    {
      name: 'Manila',
      country: 'Philippines',
      temp: 29,
      condition: 'Mostly Sunny',
      icon: '☀️',
      wind: 8,
      humidity: 58,
      rain: 5,
      feelsLike: 32,
      uv: 8,
      visibility: 12,
      pressure: 1012
    },
    {
      name: 'Cebu City',
      country: 'Philippines',
      temp: 27,
      condition: 'Cloudy',
      icon: '☁️',
      wind: 15,
      humidity: 72,
      rain: 20,
      feelsLike: 28,
      uv: 5,
      visibility: 9,
      pressure: 1014
    },
    {
      name: 'Davao City',
      country: 'Philippines',
      temp: 26,
      condition: 'Rainy',
      icon: '🌧️',
      wind: 18,
      humidity: 80,
      rain: 60,
      feelsLike: 25,
      uv: 3,
      visibility: 6,
      pressure: 1010
    }
  ];

  const forecast = [
    { day: 'Mon', high: 30, low: 24, icon: '☀️', condition: 'Sunny' },
    { day: 'Tue', high: 28, low: 23, icon: '⛅', condition: 'Cloudy' },
    { day: 'Wed', high: 27, low: 22, icon: '🌧️', condition: 'Rainy' },
    { day: 'Thu', high: 26, low: 21, icon: '⛈️', condition: 'Storms' },
    { day: 'Fri', high: 29, low: 23, icon: '⛅', condition: 'Cloudy' }
  ];

  const hourlyForecast = [
    { time: '12 AM', temp: 24, icon: '🌙' },
    { time: '3 AM', temp: 23, icon: '🌙' },
    { time: '6 AM', temp: 22, icon: '🌅' },
    { time: '9 AM', temp: 25, icon: '☀️' },
    { time: '12 PM', temp: 28, icon: '☀️' },
    { time: '3 PM', temp: 29, icon: '☀️' },
    { time: '6 PM', temp: 26, icon: '🌅' },
    { time: '9 PM', temp: 24, icon: '🌙' }
  ];

  const current = locations[activeLocation];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 p-4 md:p-8">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-2">Weather</h1>
          <p className="text-blue-100 text-lg">Real-time weather updates for your locations</p>
        </div>

        {/* MAIN WEATHER CARD */}
        <div className="mb-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          {/* HEADER */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-wide">{current.name}</h2>
              <p className="text-blue-100 text-lg mt-2">{current.country}</p>
            </div>
            <div className="text-6xl">{current.icon}</div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT SIDE - MAIN TEMP */}
            <div className="flex flex-col justify-center">
              <div className="text-9xl font-thin tracking-tighter leading-none">{current.temp}°</div>
              <p className="text-3xl font-medium text-blue-100 mt-4">{current.condition}</p>
              <p className="text-blue-200 mt-4">Feels like <span className="font-semibold">{current.feelsLike}°C</span></p>
            </div>

            {/* RIGHT SIDE - DETAILED STATS */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                <p className="text-xs text-blue-200 uppercase tracking-wider mb-2">Humidity</p>
                <p className="text-3xl font-bold">{current.humidity}%</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                <p className="text-xs text-blue-200 uppercase tracking-wider mb-2">Wind Speed</p>
                <p className="text-3xl font-bold">{current.wind} km/h</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                <p className="text-xs text-blue-200 uppercase tracking-wider mb-2">UV Index</p>
                <p className="text-3xl font-bold">{current.uv}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                <p className="text-xs text-blue-200 uppercase tracking-wider mb-2">Pressure</p>
                <p className="text-3xl font-bold">{current.pressure} mb</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                <p className="text-xs text-blue-200 uppercase tracking-wider mb-2">Visibility</p>
                <p className="text-3xl font-bold">{current.visibility} km</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                <p className="text-xs text-blue-200 uppercase tracking-wider mb-2">Rainfall</p>
                <p className="text-3xl font-bold">{current.rain}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* LOCATION TABS */}
        <div className="mb-8">
          <h3 className="text-white text-lg font-semibold mb-4">Your Locations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {locations.map((location, index) => (
              <button
                key={index}
                onClick={() => setActiveLocation(index)}
                className={`p-4 rounded-2xl backdrop-blur-lg border transition-all duration-300 ${
                  activeLocation === index
                    ? 'bg-white/20 border-white/40 shadow-xl'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="text-2xl mb-2">{location.icon}</div>
                <p className="text-white font-semibold text-sm">{location.name}</p>
                <p className="text-blue-100 text-xs">{location.temp}°C</p>
              </button>
            ))}
          </div>
        </div>

        {/* 5-DAY FORECAST */}
        <div className="mb-8">
          <h3 className="text-white text-lg font-semibold mb-4">5-Day Forecast</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {forecast.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 text-white text-center hover:bg-white/15 transition-all duration-300"
              >
                <p className="font-semibold mb-2">{item.day}</p>
                <div className="text-4xl my-3">{item.icon}</div>
                <p className="text-sm text-blue-100 mb-3">{item.condition}</p>
                <div className="flex justify-center gap-2 text-sm">
                  <span>H: {item.high}°</span>
                  <span className="text-blue-200">L: {item.low}°</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HOURLY FORECAST */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Hourly Forecast</h3>
          <div className="overflow-x-auto">
            <div className="flex gap-3 pb-2">
              {hourlyForecast.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 text-white text-center hover:bg-white/15 transition-all duration-300 min-w-[100px]"
                >
                  <p className="text-sm font-semibold mb-2">{item.time}</p>
                  <div className="text-3xl my-2">{item.icon}</div>
                  <p className="font-bold">{item.temp}°</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-12 text-center text-blue-100 text-sm">
          <p>Last updated: {new Date().toLocaleTimeString()}</p>
          <p className="mt-2">Weather Dashboard • Real-time Data</p>
        </div>
      </div>
    </div>
  );
}

export default App;
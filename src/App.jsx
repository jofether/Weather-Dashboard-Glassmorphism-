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
      <div className="max-w-7xl mx-auto">
        {/* [BUG - LAYERS] Absolute positioning without parent context - title floats far away, completely breaking layout */}
        {/* [FIX] Remove 'absolute -top-20 -left-32' classes and use relative positioning */}
        <div className="mb-8 relative">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-2 absolute -top-20 -left-32">Weather</h1>
          <p className="text-blue-100 text-lg">Real-time weather updates for your locations</p>
        </div>

        {/* [BUG - LAYERS] z-index set to negative -z-10 forces card completely behind everything else */}
        {/* [FIX] Change '-z-10' to 'z-10' or remove z-index entirely */}
        <div className="mb-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 text-white shadow-2xl -z-10">
          {/* HEADER */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-wide">{current.name}</h2>
              <p className="text-blue-100 text-lg mt-2">{current.country}</p>
            </div>
            <div className="text-6xl">{current.icon}</div>
          </div>

          {/* [BUG - LAYOUT] Grid forced to absolute single-column layout with max-width constraint - completely broken responsive design */}
          {/* [FIX] Change 'grid-cols-1 max-w-xs' to 'md:grid-cols-2' */}
          <div className="grid grid-cols-1 max-w-xs gap-8">
            {/* LEFT SIDE - MAIN TEMP */}
            <div className="flex flex-col justify-center">
              <div className="text-9xl font-thin tracking-tighter leading-none">{current.temp}°</div>
              <p className="text-3xl font-medium text-blue-100 mt-4">{current.condition}</p>
              <p className="text-blue-200 mt-4">Feels like <span className="font-semibold">{current.feelsLike}°C</span></p>
            </div>

            {/* [BUG - LAYOUT] Stats grid forced to extreme single column with tiny width - 6 boxes stack into impossibly narrow column */}
            {/* [FIX] Change 'grid-cols-1 max-w-32' to 'grid-cols-2' */}
            <div className="grid grid-cols-1 max-w-32 gap-4">
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
          {/* [BUG - TYPO] 'grid-cols-2' severely misspelled + flex-col forces everything into single-line overflow */}
          {/* [FIX] Change 'grid-col-2 flex-col' to 'grid-cols-2' */}
          <div className="grid grid-col-2 flex-col md:grid-cols-4 gap-3 overflow-hidden">
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
          {/* [BUG - TYPO] 'text-lg' misspelled as 'text-lgg' + forced to text-xs - heading becomes tiny and barely readable */}
          {/* [FIX] Change 'text-lgg text-xs' to 'text-lg' */}
          <h3 className="text-white text-lgg text-xs font-semibold mb-4">5-Day Forecast</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {forecast.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 text-white text-center hover:bg-white/15 transition-all duration-300"
              >
                {/* [BUG - SPACING] Extreme -mx-32 negative margin causes massive overflow, text shoots far left of container */}
                {/* [FIX] Remove '-mx-32' completely or set to 'mx-0' */}
                <p className="font-semibold mb-2 -mx-32 text-yellow-300 font-black">► {item.day}</p>
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
          {/* [BUG - SPACING] All padding/margin removed (p-0 m-0) + bg-red-500/50 - title cramped to edge with visual warning */}
          {/* [FIX] Remove 'p-0 m-0 bg-red-500/50' and add back proper spacing */}
          <h3 className="text-white text-lg font-semibold p-0 m-0 bg-red-500/50">Hourly Forecast</h3>
          <div className="overflow-x-auto">
            {/* [BUG - COLOR/CONTRAST] Text opacity set to 0 + bg-gray-900 dark background - content completely invisible, only skeleton visible */}
            {/* [FIX] Remove 'text-opacity-0 bg-gray-900' completely */}
            <div className="flex gap-3 pb-2 text-opacity-0 bg-gray-900">
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
        {/* [BUG - COLOR/CONTRAST] Text set to pure white on nearly-white background - footer text is completely invisible, unreadable disaster */}
        {/* [FIX] Change 'text-white bg-white/90' to 'text-blue-100 bg-white/5' */}
        <div className="mt-12 text-center text-white text-sm bg-white/90 p-4">
          <p>Last updated: {new Date().toLocaleTimeString()}</p>
          <p className="mt-2">Weather Dashboard • Real-time Data</p>
        </div>
      </div>
    </div>
  );
}

export default App;
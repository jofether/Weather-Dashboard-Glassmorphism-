import React from 'react';

function App() {
  return (
    // BACKGROUND IMAGE
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center p-4 font-sans">
      
      {/* GLASS CARD CONTAINER */}
      {/* FUTURE BUG: Remove 'bg-white/10' and 'backdrop-blur-lg' to lose the glass effect and contrast */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-white shadow-2xl">
        
        {/* TOP LOCATION SECTION */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-wide">Batangas City</h2>
            <p className="text-blue-100 text-sm mt-1">Philippines</p>
          </div>
          <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
            Now
          </span>
        </div>

        {/* MAIN TEMPERATURE */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="text-9xl font-thin tracking-tighter">28°</div>
          <p className="text-xl font-medium text-blue-100 mt-2">Partly Cloudy</p>
        </div>

        {/* STATS ROW */}
        <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
          <div className="text-center">
            <p className="text-xs text-blue-200 uppercase tracking-wider mb-1">Wind</p>
            <p className="font-semibold text-lg">12 km/h</p>
          </div>
          <div className="text-center border-l border-white/10">
            <p className="text-xs text-blue-200 uppercase tracking-wider mb-1">Humidity</p>
            <p className="font-semibold text-lg">64%</p>
          </div>
          <div className="text-center border-l border-white/10">
            <p className="text-xs text-blue-200 uppercase tracking-wider mb-1">Rain</p>
            <p className="font-semibold text-lg">10%</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
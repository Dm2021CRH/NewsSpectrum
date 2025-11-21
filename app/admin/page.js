export default function Admin() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800 p-6 rounded-xl">
            <p className="text-gray-400 text-sm">Total Subscribers</p>
            <p className="text-5xl font-bold mt-2">0</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <p className="text-gray-400 text-sm">Monthly Revenue</p>
            <p className="text-5xl font-bold mt-2">$0</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <p className="text-gray-400 text-sm">Status</p>
            <p className="text-3xl font-bold mt-2 text-green-400">LIVE</p>
          </div>
        </div>

        <div className="bg-gray-800 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Generate Tomorrow's Story</h2>
          <p className="text-gray-300 mb-6">Click below to let Grok create a brand-new full story (all 8 sources, quotes, everything) and publish it automatically.</p>
          <button className="bg-primary hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl">
            Generate & Publish New Story
          </button>
        </div>
      </div>
    </div>
  );
}

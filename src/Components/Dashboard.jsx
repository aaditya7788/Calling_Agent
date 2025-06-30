
import { fetchStatistics } from '../../api/requests';
import { useEffect, useState } from 'react';
const Dashboard = ({ setTab, googleId }) => {
  const [stats, setStats] = useState([
    { title: "Calls Today", value: 0 },
    { title: "Total Calls", value: 0 },
  ]);

  useEffect(() => {
    const getStatistics = async () => {
      try {
        const data = await fetchStatistics(googleId);
        console.log("Dashboard Data:", data);
        setStats([
          { title: "Calls Today", value: data.todaysCalls || 0 },
          { title: "Total Calls", value: data.totalCalls || 0 },
        ]);
      } catch (error) {
        console.error("Failed to fetch statistics:", error);
      }
    };

    getStatistics();
  }, [googleId]);

  const campaigns = [
    { name: 'Campaign Alpha', status: 'Active', progress: 75 },
    { name: 'Campaign Beta', status: 'Paused', progress: 50 },
    { name: 'Campaign Gamma', status: 'Completed', progress: 100 },
  ];

  return (
    <section
      id="dashboard"
      className="min-h-screen px-4 sm:px-6 md:px-12 lg:px-[10vw] py-8 overflow-auto overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold mb-10">
          Overview
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-main-color text-white rounded-3xl p-6 flex flex-col items-center justify-center h-40 shadow-md transition-transform hover:scale-105 duration-200"
            >
              <h3 className="text-lg sm:text-xl font-bold">{item.title}</h3>
              <h2 className="text-xl sm:text-2xl font-semibold">{item.value}</h2>
            </div>
          ))}
        </div>

        {/* Active Campaigns */}
        <div className='mt-14 mb-6 flex-row'>
          <h2 className="text-white mt-14 text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
          Active Campaigns
          </h2>
          <h1 className='text-white text-lg sm:text-xl md:text-2xl font-semibold mb-6'>
            This feature is currently unavailable. It will be enabled soon!
          </h1>
        </div>

        <div className="overflow-x-auto rounded-lg border border-green-800">
          <table className="min-w-full text-white text-left">
            <thead className="bg-[#1f2d1f] text-gray-300 text-sm sm:text-base">
              <tr>
                <th className="px-6 py-4">Campaign Name</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Progress</th>
              </tr>
            </thead>
            <tbody className="bg-[#0f1c0f]">
              {campaigns.map((campaign, idx) => (
                <tr key={idx} className="border-t border-green-800">
                  <td className="px-6 py-4">{campaign.name}</td>
                  <td className="px-6 py-4">
                    <span className="bg-[#1c331c] text-white px-4 py-1 rounded-full text-sm">
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-full bg-gray-700 h-2 rounded">
                        <div
                          className="h-2 bg-green-500 rounded"
                          style={{ width: `${campaign.progress}%` }}
                        />
                      </div>
                      <span className="text-sm">{campaign.progress}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className=' flex flex-col sm:flex-row gap-x-5'>
            <button onClick={()=> setTab('Call')} className="mt-6 px-4 py-2 bg-main-color font-bold text-white rounded-lg hover:bg-green-700 transition-colors">
                New Call
            </button>
            <button onClick={() => alert('Currently Unavailabe. Coming Soon!')} className="mt-6 px-4 py-2 bg-main-color font-bold text-white rounded-lg hover:bg-green-700 transition-colors">
                New Campaign
            </button>
            {/* <button className="mt-6 px-4 py-2 bg-main-color font-bold text-white rounded-lg hover:bg-green-700 transition-colors">
                Train Ai
            </button>
            <a onClick={()=>setTab('onetimecall')} href='#OneTimeCall'>
              <button className="mt-6 px-4 py-2 bg-main-color font-bold text-white rounded-lg hover:bg-green-700 transition-colors">
                One-time Call
            </button>
            </a> */}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

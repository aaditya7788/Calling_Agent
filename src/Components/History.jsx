import { useEffect, useState } from "react";
import { fetchCallHistory } from "../../api/requests";

const History = ({ googleId }) => {
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHistory = async () => {
      try {
        const data = await fetchCallHistory(googleId);
        console.log("Fetched history data:", data);
        setHistoryData(data.history); // Assuming the response contains a `history` array
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch call history:", error);
        setLoading(false);
      }
    };

    getHistory();
  }, [googleId]);

  if (loading) {
    return <p className="text-white">Loading call history...</p>;
  }

  return (
    <section
      id="history"
      className="min-h-screen px-4 sm:px-6 md:px-12 lg:px-[10vw] py-8 overflow-auto overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold mb-10">
          Call History
        </h1>

        <div className="overflow-x-auto rounded-lg border border-green-800">
          <table className="min-w-full text-white text-left">
            <thead className="bg-[#1f2d1f] text-gray-300 text-sm sm:text-base">
              <tr>
                <th className="px-6 py-4">Contact Name</th>
                <th className="px-6 py-4">Phone Number</th>
                <th className="px-6 py-4">Goal</th>
                <th className="px-6 py-4">AI Personality</th>
                <th className="px-6 py-4">Voice Choice</th>
                <th className="px-6 py-4">Timestamp</th>
                <th className="px-6 py-4">Script</th>
              </tr>
            </thead>
            <tbody className="bg-[#0f1c0f]">
              {historyData.map((item, idx) => (
                <tr key={idx} className="border-t border-green-800">
                  <td className="px-6 py-4">{item.contactName}</td>
                  <td className="px-6 py-4">{item.phoneNumber}</td>
                  <td className="px-6 py-4">{item.goal}</td>
                  <td className="px-6 py-4">{item.aiPersonality}</td>
                  <td className="px-6 py-4">{item.voiceChoice}</td>
                  <td className="px-6 py-4">
                    
                    {new Date(item.timestamp).toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col space-y-2">
                      <p className="text-sm">{item.script}</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default History;
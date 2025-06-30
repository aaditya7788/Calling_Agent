import React, { useState } from "react";
import { scheduleCall } from "../../api/requests";

const Call = ({ googleId }) => {
  const [form, setForm] = useState({
    googleId: googleId,
    contactName: "",
    phoneNumber: "",
    goal: "",
    personality: "",
    script: "",
    voice: "",
  });

  // Predefined options
  const Personalities = ["Friendly", "Professional", "Witty", "Empathetic"];
  const Voices = ["sarah", "onyx", "jessica", "santa"];

  // Predefined test data
  const testData = {
    contactName: "Aaditya Sahani",
    phoneNumber: "+91",
    goal: "Order Delay Notification",
    personality: "Professional",
    script: `you going to talk to Aaditya Sahani, on call to discuss Order Delay Notification in a Professional tone. from now dont need to say anything about yourself, just focus on the topic. without emojis or any other distractions. your script is: Hi! This is an update regarding your order for Freakin denim blue jeans, order ID ending in 4827. We wanted to let you know that your order will be shipped tomorrow, but there will be a delay of approximately 6 hours in the expected delivery time.

We sincerely apologize for the inconvenience this may cause. If you have any questions or need further assistance, please don’t hesitate to ask. We're here to help.

Thank you for your patience and continued support when it feels like you are done, say "thank you for your time" and end the call. dont say anything else which is outoff script and goal dodge that question.`,
    voice: "sarah",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAutofill = () => {
    setForm((prev) => ({ ...prev, ...testData }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      googleId: form.googleId,
      contactName: form.contactName,
      phoneNumber: form.phoneNumber,
      goal: form.goal,
      aiPersonality: form.personality,
      customScript: form.script,
      voiceChoice: form.voice,
    };

    try {
      const response = await scheduleCall(payload);
      console.log("Response:", response);
      alert("Call scheduled successfully!");
    } catch (error) {
      console.error("Error scheduling call:", error);
      alert("Failed to schedule the call. Please try again.");
    }
  };

  return (
    <section
      id="Call"
      className="min-h-screen px-4 sm:px-6 md:px-12 lg:px-[10vw] py-8 overflow-auto overflow-x-hidden"
    >
      <div className="max-w-2xl mx-auto text-white relative">
        {/* Top-right Try Button */}
        <button
          onClick={handleAutofill}
          className="absolute top-0 right-0 bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-4 rounded-lg transition-colors shadow-md sm:text-sm text-xs"
        >
          Try
        </button>

        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold mb-10">
          Call with AI Assistant
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact Name */}
          <div>
            <label className="block mb-2">Name of Contact</label>
            <input
              type="text"
              name="contactName"
              value={form.contactName}
              onChange={handleChange}
              placeholder="Enter contact name"
              className="w-full px-4 py-2 rounded-lg bg-[#152515] border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block mb-2">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              placeholder="+91 1234567890"
              className="w-full px-4 py-2 rounded-lg bg-[#152515] border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Goal */}
          <div>
            <label className="block mb-2">Goal of the Call</label>
            <input
              type="text"
              name="goal"
              value={form.goal}
              onChange={handleChange}
              placeholder="e.g., Product Feedback"
              className="w-full px-4 py-2 rounded-lg bg-[#152515] border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Personality */}
          <div>
            <label className="block mb-2">AI Personality</label>
            <select
              name="personality"
              value={form.personality}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#152515] border border-green-700 text-white"
            >
              <option value="">Select personality</option>
              {Personalities.map((p, i) => (
                <option key={i} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          {/* Script */}
          <div>
            <label className="block mb-2">Custom Script (optional)</label>
            <textarea
              name="script"
              value={form.script}
              onChange={handleChange}
              rows="4"
              placeholder="Enter a custom message or leave blank"
              className="w-full px-4 py-2 rounded-lg bg-[#152515] border border-green-700 focus:outline-none"
            ></textarea>
          </div>

          {/* Voice */}
          <div>
            <label className="block mb-2">Voice Choice</label>
            <select
              name="voice"
              value={form.voice}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#152515] border border-green-700 text-white"
            >
              <option value="">Select voice</option>
              {Voices.map((v, i) => (
                <option key={i} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-4 bg-green-500 hover:bg-green-600 text-black font-semibold py-2 rounded-lg transition-colors"
          >
            Schedule Call
          </button>
        </form>
      </div>
    </section>
  );
};

export default Call;
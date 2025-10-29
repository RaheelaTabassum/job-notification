"use client";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        subject: "New Job Notification",
        message: message,
      }),
    });

    setLoading(false);
    if (res.ok) alert("✅ Email sent successfully!");
    else alert("❌ Failed to send email.");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Job Notification App</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter job alert message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="5"
          cols="40"
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Email"}
        </button>
      </form>
    </div>
  );
}

import { useState } from "react";
import "./styles.css";

export default function Hide() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [secret, setSecret] = useState("");
  const [key, setKey] = useState(null);
  const [error, setError] = useState(null);

  const submit = async () => {
    setError(null);
    const res = await fetch(`${API_URL}/api/hide/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret })
    });
    const data = await res.json();
    if (res.ok) setKey(data.key);
    else setError(data.error || "Error");
  };

  return (
    <div className="container">
      <h1>Ocultar</h1>
      <div className="form-row">
        <textarea
          value={secret}
          onChange={e => setSecret(e.target.value)}
          placeholder="Escribe el secreto aquí"
        />
        <button onClick={submit}>Ocultar</button>
      </div>
      <div className="response">{key && <>Key: <code>{key}</code></>}</div>
      <div className="error">{error}</div>
    </div>
  );
}

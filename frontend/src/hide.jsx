import { useState } from "react";
import "./styles.css";

export default function Hide() {
  const [secret, setSecret] = useState("");
  const [key, setKey] = useState(null);
  const [error, setError] = useState(null);

  const submit = async () => {
    setError(null);
    const res = await fetch("http://127.0.0.1:8000/api/hide/", {
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

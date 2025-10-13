import { useState } from "react";
import "./styles.css";

export default function Reveal() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [key, setKey] = useState("");
  const [secret, setSecret] = useState(null);
  const [error, setError] = useState(null);

  const fetchSecret = async () => {
    setError(null);
    setSecret(null);
    const res = await fetch(`${API_URL}/api/reveal/${key}/`);
    const data = await res.json();
    if (res.ok) setSecret(data.secret);
    else setError(data.error || "No disponible");
  };

  return (
    <div className="container">
      <h1>Revelar</h1>
      <div className="form-row">
        <input
          value={key}
          onChange={e => setKey(e.target.value)}
          placeholder="Ingresa la key"
        />
        <button onClick={fetchSecret}>Revelar</button>
      </div>
      <div className="response">
        {secret && <><strong>Secreto:</strong><pre>{secret}</pre></>}
      </div>
      <div className="error">{error}</div>
    </div>
  );
}

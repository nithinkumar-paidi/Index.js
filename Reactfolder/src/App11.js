import React, { useState } from "react";
import Container from "./Container";

export default function App11() {
  const [flag, setFlag] = useState(0);

  return (
    <div>
      <button onClick={() => setFlag(1)}>Feeds</button>
      <button onClick={() => setFlag(2)}>Post</button>
      <Container flag={flag} />
    </div>
  );
}

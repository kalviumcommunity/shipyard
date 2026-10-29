"use client";

import { useState } from "react";

// Small client component so the buttons actually respond to clicks.
// A real cart needs shared state; here we just give honest visual feedback.
export default function ProductActions() {
  const [added, setAdded] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="detail-actions">
      <button
        className="btn-primary"
        onClick={() => setAdded(true)}
        disabled={added}
      >
        {added ? "Added to cart ✓" : "Add to cart"}
      </button>
      <button className="btn-ghost" onClick={() => setSaved((s) => !s)}>
        {saved ? "♥ Saved" : "♡ Save"}
      </button>
    </div>
  );
}

// A tiny read-only star rating. Rounds to the nearest half for the fill.
export default function Stars({ rating }: { rating: number }) {
  const rounded = Math.round(rating * 2) / 2;
  return (
    <span className="stars" aria-label={`${rating} out of 5 stars`}>
      <span className="stars-track">★★★★★</span>
      <span className="stars-fill" style={{ width: `${(rounded / 5) * 100}%` }}>
        ★★★★★
      </span>
      <span className="stars-num">{rating.toFixed(1)}</span>
    </span>
  );
}

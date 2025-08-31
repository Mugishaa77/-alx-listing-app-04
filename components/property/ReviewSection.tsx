import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
  id: string;
  comment: string;
  rating?: number;
  user?: {
    name: string;
  };
}

interface ReviewSectionProps {
  propertyId: string;
}

const ReviewSection = ({ propertyId }: ReviewSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (err: any) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (reviews.length === 0) {
    return <p>No reviews available for this property yet.</p>;
  }

  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map((review) => (
        <div
          key={review.id}
          style={{
            borderBottom: "1px solid #ddd",
            padding: "10px 0",
          }}
        >
          <p>
            <strong>{review.user?.name || "Anonymous"}:</strong>
          </p>
          <p>{review.comment}</p>
          {review.rating && <p>⭐ {review.rating}/5</p>}
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;

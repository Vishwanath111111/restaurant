import React from "react";

export const RestaurantSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "RASOI MAHAL - The Royal Taste of India",
    "image": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=80"
    ],
    "@id": "https://rasoimahal.com",
    "url": "https://rasoimahal.com",
    "telephone": "+919876543210",
    "priceRange": "₹₹₹₹",
    "servesCuisine": [
      "North Indian",
      "South Indian",
      "Rajasthani",
      "Mughlai",
      "Punjabi",
      "Hyderabadi",
      "Jain",
      "Vegetarian"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Heritage Palace Road, Civil Lines",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302006",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.9124,
      "longitude": 75.7873
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "12:00",
        "closes": "15:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "19:00",
        "closes": "23:30"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1280"
    },
    "hasMenu": "https://rasoimahal.com/menu",
    "acceptsReservations": "True"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

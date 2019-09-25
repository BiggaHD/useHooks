import { useState, useEffect } from "react";

const useLocation = () => {
  const [lat, setLat] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setError(err.message)
    );
  }, []);

  return [lat, error];
};

export default useLocation;

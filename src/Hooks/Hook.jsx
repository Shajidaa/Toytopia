import { useEffect, useState } from "react";

const useToys = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      })
      .catch((err) => setError(err));
  }, []);
  return { toys, loading, error };
};

export default useToys;

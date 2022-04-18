import { useEffect, useState } from "react";

export default function useFetch(url: string) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch(url)
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(data => {
        setData(data);
      });
  }, [url]);

  return data;
}

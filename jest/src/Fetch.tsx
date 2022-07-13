import React, { useEffect, useState } from "react";

interface IMock {
  id: number;
  name: string;
}

const mockFetch = async (): Promise<IMock[]> => {
  const exampleData: IMock[] = [
    { id: 1, name: "Person1" },
    { id: 2, name: "Person2" },
  ];
  return new Promise<IMock[]>((reslove) => {
    setTimeout(() => reslove(exampleData), 100);
  });
};

const Fetch = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [result, setResult] = useState<IMock[] | null>(null);

  useEffect(() => {
    const loadResult = async () => {
      const fetchedResult = await mockFetch();
      setResult(fetchedResult);
      setLoading(false);
    };

    loadResult();
  }, []);

  return (
    <div>
      {loading && <div>Loading</div>}
      {result && (
        <ul>
          {result.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Fetch;

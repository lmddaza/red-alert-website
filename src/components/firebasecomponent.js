import { useEffect, useState } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/database";

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const databaseRef = firebase
        .database()
        .ref("/UsersData/q4D17ihPsvhRCI86GuVs89RevnD2/readings");

      databaseRef.on("value", (snapshot) => {
        const data = snapshot.val();
        setData(data);
      });
    };

    fetchData();

    // Cleanup by unsubscribing from the listener when the component unmounts
    return () => {
      databaseRef.off();
    };
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h2>Data from Realtime Database:</h2>
          <p>ph: {data.ph}</p>
          <p>temperature: {data.temperature}</p>
          <p>timestamp: {data.timestamp}</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default MyComponent;

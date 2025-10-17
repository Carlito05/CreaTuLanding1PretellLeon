// src/components/ItemListContainer.jsx
import React, { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const ItemListContainer = ({ greeting }) => {
  useEffect(() => {
    (async () => {
      try {
        const snap = await getDocs(collection(db, "products"));
        console.log("Conexión Firestore OK, docs:", snap.size);
      } catch (err) {
        console.error("Error Firestore:", err);
      }
    })();
  }, []);

  return (
    <section style={{ padding: "2rem" }}>
      <h2>{greeting}</h2>
    </section>
  );
};

export default ItemListContainer;

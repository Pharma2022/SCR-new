import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import {
  collection,
  onSnapshot,
  query,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';

const useFirestoreCollection = (collectionName) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const q = query(collection(db, collectionName));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let myArr = [];
      querySnapshot.forEach((doc) => {
        myArr.push({ ...doc.data(), id: doc.id });
      });

      // Sort the data alphabetically
      myArr.sort((a, b) => a.name.localeCompare(b.name));

      setData(myArr);
    });

    return () => unsubscribe();
  }, [collectionName]);

  const createDocument = async (newDoc) => {
    try {
      await addDoc(collection(db, collectionName), newDoc);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const updateDocument = async (docId, updatedDoc) => {
    console.log("Updating document with ID:", docId); // Log the docId
    console.log("Collection name:", collectionName); // Log the collectionName
    console.log("Updated document data:", updatedDoc); // Log the updated document data
  
    try {
      const docRef = doc(db, collectionName, docId);
      await updateDoc(docRef, updatedDoc);
    } catch (error) {
      alert("Error updating document: ", error);
    }
  };

  const deleteDocument = async (docId) => {
    try {
      const docRef = doc(db, collectionName, docId);
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return { data, createDocument, updateDocument, deleteDocument };
};

export default useFirestoreCollection;

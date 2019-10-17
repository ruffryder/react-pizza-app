import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAUSJ5FUkSgX2NKlCHmYWgMezIknnUn_-s",
  authDomain: "pizza-app-4df3a.firebaseapp.com",
  databaseURL: "https://pizza-app-4df3a.firebaseio.com",
  projectId: "pizza-app-4df3a",
  storageBucket: "",
  messagingSenderId: "776105950620",
  appId: "1:776105950620:web:6dba7c1d30771556"
};

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  console.log(objectsToAdd);
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertDishesSnapshotToMap = dishes => {
  const transformedDishes = dishes.docs.map(doc => {
    const { category_id, title, price, description, imageUrl } = doc.data();
    return {
      id: doc.id,
      category_id: category_id.id,
      title,
      price,
      description,
      imageUrl
    };
  });
  return transformedDishes;
};

export const convertCategoriesSnapshotToMap = categories => {
  const transformedCategories = categories.docs.map(doc => {
    const { title, imageUrl } = doc.data();
    return {
      id: doc.id,
      title,
      imageUrl
    };
  });
  return transformedCategories;
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export default firebase;

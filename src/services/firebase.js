// Firebase
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  where,
  query,
  addDoc,
} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAmKaH8qboaFaRK4Fm6AB7k66pM9TNvYes",
    authDomain: "camisetas-ecommerce.firebaseapp.com",
    projectId: "camisetas-ecommerce",
    storageBucket: "camisetas-ecommerce.appspot.com",
    messagingSenderId: "466043829666",
    appId: "1:466043829666:web:a26188e4d8e7d8acfd46fb"
  };

const appFirebase = initializeApp(firebaseConfig);

const db = getFirestore(appFirebase);

async function getData() {
  const productsRef = collection(db, "items");
  const documentsSnapshot = await getDocs(productsRef);
  const documents = documentsSnapshot.docs;
  const docsData = documents.map(
    (item) => {
      return { ...item.data(), id: item.id };
    }
  );
  return docsData;
}

async function getProductData(id) {
  const docRef = doc(db, "items", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("No encontramos ese producto.");
  }
}

async function getCategoryData(categoryId) {
  const productsRef = collection(db, "items");
  const q = query(productsRef, where("category", "==", categoryId));
  const documentsSnapshot = await getDocs(q);
  const documents = documentsSnapshot.docs;
  return documents.map((item => ({...item.data(), id: item.id})))
}

async function createOrder(orderData){
  const collectionRef = collection(db, "orders")
  const docCreated = await addDoc(collectionRef, orderData)

  return(docCreated.id)
}

async function getOrder(id){
  const docRef = doc(db, "orders", id);
  const docSnapshot = await getDoc(docRef);

  return { ...docSnapshot.data(), id: docSnapshot.id };
}

export { getData, getOrder, getProductData, getCategoryData, createOrder };

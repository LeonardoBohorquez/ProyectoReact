import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, where, query, addDoc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCrKgjPQvR7FnTVSrSWz7i04puR8TFhq2A",
  authDomain: "react-app-leonardo.firebaseapp.com",
  projectId: "react-app-leonardo",
  storageBucket: "react-app-leonardo.appspot.com",
  messagingSenderId: "45007269355",
  appId: "1:45007269355:web:94f912cc9e6779b5a33dae",
  measurementId: "G-9GG2YJ5EB6"
};

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase)

async function getData(){
  const productsRef = collection(db, "PcGaming")
  const documentsSnapshot = await getDocs(productsRef)
  const documents = documentsSnapshot.docs;
  const docsData = documents.map((item) => {
    return {...item.data(), id: item.id}
  })
  return docsData;
}
async function getProductData(id) {
  const docRef = doc(db, "PcGaming", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("Producto no encontrado");
  }
}
async function getCategoryData(categoria) {
  const productsRef = collection(db, "PcGaming",);
  const q = query(productsRef, where("categoria", "==", categoria));
  const documentsSnapshot = await getDocs(q);

  const documents = documentsSnapshot.docs;

  return documents.map((item) => ({ ...item.data(), id: item.id }));
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

export { getData, getProductData, getCategoryData, createOrder, getOrder};

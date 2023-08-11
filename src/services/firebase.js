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
  setDoc,
  writeBatch
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

// 2 Implementar async function getData()

async function getData() {
  const productsRef = collection(db, "items");
  const documentsSnapshot = await getDocs(productsRef);
  const documents = documentsSnapshot.docs;
  const docsData = documents.map(
    (item) => {
      return { ...item.data(), id: item.id };
    }
    /* {let productFullData = item.data();
    productFullData.id = item.id;
    return productFullData; }*/
  );
  return docsData;
}

//  3.Implementar getProductData
async function getProductData(id) {
  const docRef = doc(db, "items", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("No encontramos ese producto.");
  }
}

// * 4 Implementar getCategoryData
async function getCategoryData() {
  const productsRef = collection(db, "items");
  // cambiamos esto
  const q = query(productsRef, where("price", ">=", 200));
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


async function _exportProducts(){
  const productos = [
    {
        id: 1,
        category: "premier" ,
        img: "https://i1.adis.ws/i/ArsenalDirect/mje8028_f?$810x810$&.jpg",
        name: "Camiseta Arsenal Titular 23/24",
        price: 38,
        stock: 18,
    },
    {
        id: 2,
        category: "premier" ,
        img: "https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw088ef24b/images/large/701225660001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit",
        name: "Camiseta Manchester City Titular 23/24",
        price: 45,
        stock: 15,
    },
    {
        id: 3,
        category: "seriea" ,
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/770383/01/fnd/THA/fmt/png/AC-Milan-23/24-Home-Jersey",
        name: "Camiseta AC Milan Titular 23/24",
        price: 39,
        stock: 14,
    },
    {
        id: 4,
        category: "premier" ,
        img: "https://www.innovasport.com/medias/jersey-adidas-manchester-united-local-2223-is-H13881-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDE1ODd8aW1hZ2UvanBlZ3xpbWFnZXMvaGVhL2hjZi8xMTAzMzU2OTc1NTE2Ni5qcGd8YWVmMzkzYWI1MzdjOTUzZTMzZWUwMmE1ZjEwNDQ0NTE3NjYyYjEzMjRmM2I0YzNmOGExNWQ1ZjkxNDYyOTA0NQ",
        name: "Camiseta Manchester United Titular 22/23",
        price: 42,
        stock: 12,
    },
    {
        id: 5,
        category: "bundesliga" ,
        img: "https://www.bvbonlineshop.com/media/image/2b/ca/be/76390-645dfca2b3df3_200x200.jpg",
        name: "Camiseta Borussia Dortmund Titular 23/2",
        price: 43,
        stock: 13,
    },
    {
        id: 6,
        category: "laliga" ,
        img: "https://www.soccerlord.se/wp-content/uploads/2018/06/Barcelona-Home-Kids-Football-Kit-23-24.jpg",
        name: "Camiseta Barcelona Titular 23/24",
        price: 50,
        stock: 10,
    },
    {
        id: 7,
        category: "laliga" ,
        img: "https://us.shop.realmadrid.com/cdn/shop/products/RMCFMZ0128_08_c4faf998-43da-4ba2-97c1-4a09d86dfe8c_500x480.jpg?v=1686746719",
        name: "Camiseta Real Madrid Titular Manga Larga 23/24",
        price: 46,
        stock: 10,
    },
    {
        id: 8,
        category: "seriea" ,
        img: "https://store.inter.it/on/demandware.static/-/Sites-inter-master-catalog/default/dw2fccf503/images/large/22N001M0502_01.jpg",
        name: "Camiseta Inter de Milan Titular 22/23",
        price: 41,
        stock: 11,
    },
    {
        id: 9,
        category: "bundesliga" ,
        img: "https://img.fcbayern.com/image/upload/f_auto,q_auto,w_384/eCommerce/produkte/31701",
        name: "Camiseta Bayern Munich Titular 23/2",
        price: 47,
        stock: 17,
    },
    {
        id: 10,
        category: "seriea" ,
        img: "https://store.asroma.com/media/catalog/product/m/a/maglia_home_elite_spqr_uomo_2022_23.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1000&width=1250&canvas=1250:1000",
        name: "Camiseta AS Roma Titular 22/23",
        price: 37,
        stock: 20,
    }
];

  // for ... of
  // productos.forEach( item => {})
 /*  for(let item of productos){
    console.log(item)
    const docRef = doc(db, "products", String(item.id))
    const docCreated = await setDoc(docRef, item);
    console.log("Doc created with id:", docCreated.id)
  } */

  for(let item of productos){   
    const collectionRef = collection(db, "items")
    const docCreated = await addDoc(collectionRef, item);
    console.log("Doc created with id:", docCreated.id)
  }
}


async function _exportProductsWithBatch(){
    const productos = [
        {
            id: 1,
            category: "premier" ,
            img: "https://i1.adis.ws/i/ArsenalDirect/mje8028_f?$810x810$&.jpg",
            name: "Camiseta Arsenal Titular 23/24",
            price: 38,
            stock: 18,
        },
        {
            id: 2,
            category: "premier" ,
            img: "https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw088ef24b/images/large/701225660001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit",
            name: "Camiseta Manchester City Titular 23/24",
            price: 45,
            stock: 15,
        },
        {
            id: 3,
            category: "seriea" ,
            img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/770383/01/fnd/THA/fmt/png/AC-Milan-23/24-Home-Jersey",
            name: "Camiseta AC Milan Titular 23/24",
            price: 39,
            stock: 14,
        },
        {
            id: 4,
            category: "premier" ,
            img: "https://www.innovasport.com/medias/jersey-adidas-manchester-united-local-2223-is-H13881-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDE1ODd8aW1hZ2UvanBlZ3xpbWFnZXMvaGVhL2hjZi8xMTAzMzU2OTc1NTE2Ni5qcGd8YWVmMzkzYWI1MzdjOTUzZTMzZWUwMmE1ZjEwNDQ0NTE3NjYyYjEzMjRmM2I0YzNmOGExNWQ1ZjkxNDYyOTA0NQ",
            name: "Camiseta Manchester United Titular 22/23",
            price: 42,
            stock: 12,
        },
        {
            id: 5,
            category: "bundesliga" ,
            img: "https://www.bvbonlineshop.com/media/image/2b/ca/be/76390-645dfca2b3df3_200x200.jpg",
            name: "Camiseta Borussia Dortmund Titular 23/2",
            price: 43,
            stock: 13,
        },
        {
            id: 6,
            category: "laliga" ,
            img: "https://www.soccerlord.se/wp-content/uploads/2018/06/Barcelona-Home-Kids-Football-Kit-23-24.jpg",
            name: "Camiseta Barcelona Titular 23/24",
            price: 50,
            stock: 10,
        },
        {
            id: 7,
            category: "laliga" ,
            img: "https://us.shop.realmadrid.com/cdn/shop/products/RMCFMZ0128_08_c4faf998-43da-4ba2-97c1-4a09d86dfe8c_500x480.jpg?v=1686746719",
            name: "Camiseta Real Madrid Titular Manga Larga 23/24",
            price: 46,
            stock: 10,
        },
        {
            id: 8,
            category: "seriea" ,
            img: "https://store.inter.it/on/demandware.static/-/Sites-inter-master-catalog/default/dw2fccf503/images/large/22N001M0502_01.jpg",
            name: "Camiseta Inter de Milan Titular 22/23",
            price: 41,
            stock: 11,
        },
        {
            id: 9,
            category: "bundesliga" ,
            img: "https://img.fcbayern.com/image/upload/f_auto,q_auto,w_384/eCommerce/produkte/31701",
            name: "Camiseta Bayern Munich Titular 23/2",
            price: 47,
            stock: 17,
        },
        {
            id: 10,
            category: "seriea" ,
            img: "https://store.asroma.com/media/catalog/product/m/a/maglia_home_elite_spqr_uomo_2022_23.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1000&width=1250&canvas=1250:1000",
            name: "Camiseta AS Roma Titular 22/23",
            price: 37,
            stock: 20,
        }
    ];

  const batch = writeBatch(db); 

  productos.forEach( producto => {
    const newId = producto.id
    delete producto.id;
    const newDoc = doc(db, "items", `1${newId}`)
    batch.set(newDoc, producto);    
  })

  const data = await batch.commit()  
  console.log("Listo!", data)
}

export { getData, getOrder, getProductData, getCategoryData, createOrder, _exportProducts, _exportProductsWithBatch};

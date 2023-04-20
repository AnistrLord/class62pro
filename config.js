import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBDDFiBDNL2ce_Ty0Ky6lxQKQNaE_1BqBQ",
  authDomain: "ropo-6e0cb.firebaseapp.com",
  databaseURL: "https://ropo-6e0cb-default-rtdb.firebaseio.com",
  projectId: "ropo-6e0cb",
  storageBucket: "ropo-6e0cb.appspot.com",
  messagingSenderId: "510646147386",
  appId: "1:510646147386:web:eb34355bc3bea3d0821803",

};
  
if(!firebase.apps.length)
{
   let app = firebase.initializeApp(firebaseConfig); 
   }
 export default firebase.database();

  
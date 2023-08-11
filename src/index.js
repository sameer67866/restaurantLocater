import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDplXTrUHgAVMHyZXLUv4n9jA5YjZ6nmH8",
    authDomain: "auth-3d904.firebaseapp.com",
    databaseURL: "https://auth-3d904-default-rtdb.firebaseio.com",
    projectId: "auth-3d904",
    storageBucket: "auth-3d904.appspot.com",
    messagingSenderId: "923624233664",
    appId: "1:923624233664:web:2e600adc4d6b1972c92b25"
});

const auth = getAuth(firebaseApp);
// const db = getFirestore(firebaseApp);
// db.collection('todos').getDocs();
// const todosCol = collection(db, 'todos');
// const snapshot = await getDocs(todosCol);

// detect auth state
onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('logged in!');
    } else {
        console.log('no user!');
    }
});
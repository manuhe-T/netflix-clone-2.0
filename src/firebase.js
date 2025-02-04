// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBnOGH5YYGY_XCNcSxTv12D08-SZTzG_hA',
  authDomain: 'netflix-clone-build-6b0c0.firebaseapp.com',
  projectId: 'netflix-clone-build-6b0c0',
  storageBucket: 'netflix-clone-build-6b0c0.firebasestorage.app',
  messagingSenderId: '878430516462',
  appId: '1:878430516462:web:e321032036d1e1bfff6fff',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth };

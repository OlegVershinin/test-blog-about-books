import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

export const firebaseConfig = {
    apiKey: 'AIzaSyD5Wvez2W-Y12Kn8ujAv9uAY1KdAW8_IiI',
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: 'https://blog-about-books-default-rtdb.firebaseio.com',
    projectId: 'blog-about-books',
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

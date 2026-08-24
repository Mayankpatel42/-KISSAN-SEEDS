// ═══════════════════════════════════════════
//  KISSAN SEEDS — Firebase Configuration
//  This file initializes Firebase services
//  (Auth + Firestore) for use across all pages.
// ═══════════════════════════════════════════

const firebaseConfig = {
    apiKey: "AIzaSyBJLmt9trP9O9AW5Rr_GaiiXBSKh2TN6Nc",
    authDomain: "kissan-seeds-xxxxx.firebaseapp.com",
    projectId: "kissan-seeds-xxxxx",
    storageBucket: "kissan-seeds-xxxxx.firebasestorage.app",
    messagingSenderId: "299576497282",
    appId: "1:299576497282:web:0e89aefc157d8c364dd09b",
    measurementId: "G-CC54GC1Q5X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export services globally
const auth = firebase.auth();
const db = firebase.firestore();

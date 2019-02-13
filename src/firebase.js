import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  // Populate your firebase configuration data here.
  apiKey: "AIzaSyCSTUEaYnjDzntYM_FCZfLzWzsB4nbtbJg",
    authDomain: "tedx-ab46e.firebaseapp.com",
    databaseURL: "https://tedx-ab46e.firebaseio.com",
    projectId: "tedx-ab46e",
    storageBucket: "tedx-ab46e.appspot.com",
    messagingSenderId: "475507184480"
});

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.

//db.ref()

export const db = firebaseApp.database();
export const usersRef = db.ref('users');
export const onRef = db.ref('on_off');
export const questionRef = db.ref('question');

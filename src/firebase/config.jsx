import firebase from 'firebase'
import 'firebase'

const config = firebase.initializeApp({
    apiKey: "AIzaSyBeAjCS0K4s67z-Yj4H1D7Z9e7_ZCrf_CA",
    authDomain: "netflix-b62ba.firebaseapp.com",
    projectId: "netflix-b62ba",
    storageBucket: "netflix-b62ba.appspot.com",
    messagingSenderId: "390195826415",
    appId: "1:390195826415:web:4ef84ffb81cf3fc294151a",
    measurementId: "G-TNR7M2Y22D"
});

export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle= () => auth.signInWithPopup(provider)

export default config
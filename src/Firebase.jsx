// import { initializeApp } from "firebase/app";
// import {
//   GoogleAuthProvider,
//   getAuth,
//   signInWithPopup,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   sendPasswordResetEmail,
//   signOut,
// } from "firebase/auth";
// import {
//   getFirestore,
//   query,
//   getDocs,
//   collection,
//   where,
//   addDoc,
// } from "firebase/firestore";


// const firebaseConfig = {
//     apiKey: "AIzaSyCgcipugDpON1a1DEXAvcwu0wG0p0qZGBI",
//     authDomain: "login-auth-25fa1.firebaseapp.com",
//     projectId: "login-auth-25fa1",
//     storageBucket: "login-auth-25fa1.appspot.com",
//     messagingSenderId: "128458246350",
//     appId: "1:128458246350:web:fca7a32ab6f331f6c8689f",
//     measurementId: "G-8W3P2G48P3"
//   };


// const app=initializeApp(firebaseConfig)
// const auth =getAuth(app)
// const db =getFirestore(app)
// const GoogleProvider = new GoogleAuthProvider()


// const signInGoogle=async ()=>{
//     try {
//         const res =await signInWithPopup(auth,GoogleProvider)
//         let user=res.user
//         let q=query(collection(db,'users'), where('uid',"==",user.uid))
//         let docs=await getDocs()
//         if(docs.docs.length=== 0){
//             await addDoc(collection(db,'user'),{
//                 uid:user.uid,
//                 name:user.displayName,
//                 authProvider:'google',
//                 email:user.email
//             })
//         }
//     } catch (error) {
//         alert(error.message)
//         console.log(error.message)
//     }
// }



// const logInWithEmailAndPassword =async(email,password)=>{
//     try {
//         await signInWithEmailAndPassword(auth,email,provider)
//     } catch (error) {
//         console.log(error.message);
//     }
// }


// let RagisterInWithEmailAndPassword =async(name,email,password)=>{
//     try {
//        const res= await createUserWithEmailAndPassword(auth,email,password)
//         const user =res.user
//         await addDoc(collection(db,'users'),{
//             uid:user.uid,
//             name,
//             authProvider:'local',
//             email

//         })
//     } catch (error) {
//         console.log(error.message);
//     }
// }


// let sendPasswordResetEmail=async (email)=>{
//     try {
//         await sendPasswordResetEmail(auth,email)
//         alert('password reset email send')
//     } catch (error) {
//         console.log(error.message);
//     }
// }



// let logout =()=>{
//     signOut(auth)
// }

 

// export default {
//     auth,
//     db,
//     signInGoogle,
//     logInWithEmailAndPassword,
//     RagisterInWithEmailAndPassword,
//     sendPasswordResetEmail,
//     logout

// }
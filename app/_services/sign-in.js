// import {db} from "../_utils/firebase";
// import {collection, getDocs, addDoc, query, where, documentId} from "firebase/firestore";

// import {useState } from "react";

// const [user, setUser] = useState({
//     username: "",
//     name: "",
//     email: "",
// })

// // let user = {
// //     username: "",
// //     name: "",
// //     email: "",
// // };

// const checkPassword = async (username, enteredPassword) => {
//     const usersRef = collection(db, "users");
//     const q = query(
//         usersRef, where(documentId(), "==", username)
//     );
//     const docSnap = await getDocs(q);
    
//     // if(docSnap.exists()){
//         let data = [];
//         docSnap.forEach((doc) => {
//             data = [doc.data()];
//         })

        
//         // console.log("correct: "+ data[0].password);
//         // console.log("entered: " + enteredPassword);
//         if(enteredPassword == data[0].password){
//             // user = {
//             //     username: data[0].username,
//             //     name: data[0].name,
//             //     email: data[0].email,
//             // }
//             setUser({
//                 username: data[0].username,
//                 name: data[0].name,
//                 email: data[0].email,
//             })
//             return true;
//         }else{
//             return false;
//         }

//     // }else{
//     //     return false;
//     // }   
// }

// export {user, checkPassword};
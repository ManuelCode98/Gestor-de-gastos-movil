// import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
// import { db } from '../firebase/firebaseConfig';
// import { auth } from '../firebase/firebaseConfig';




// export const getTransactionsByRange = async (from, to) => {

//   const user = auth.currentUser;
//   if (!user) return [];

//   const transactionsRef = collection(
//     db,
//     'users',
//     user.uid,
//     'transactions'
//   );

//   const q = query(
//     transactionsRef,
//     where('createdAt', '>=', from),
//     where('createdAt', '<=', to),
//     orderBy('createdAt', 'desc')
//   );

//   const snapshot = await getDocs(q);
    
//   return snapshot.docs.map(doc => ({
//     id: doc.id,
//     ...doc.data(),
//   }));
// };

import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot
} from 'firebase/firestore';
import { db, auth } from '../firebase/firebaseConfig';

export const listenTransactionsByRange = (from, to, callback) => {

  const user = auth.currentUser;
  if (!user) return () => {};

  const transactionsRef = collection(
    db,
    'users',
    user.uid,
    'transactions'
  );

  const q = query(
    transactionsRef,
    where('createdAt', '>=', from),
    where('createdAt', '<=', to),
    orderBy('createdAt', 'desc')
  );

  return onSnapshot(q, (snapshot) => {
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    callback(data);
  });
};

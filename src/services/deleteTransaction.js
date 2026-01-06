import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { auth } from '../firebase/firebaseConfig';

export const deleteTransaction = async (transactionId) => {
  const user = auth.currentUser;
  if (!user) return;

  const ref = doc(
    db,
    'users',
    user.uid,
    'transactions',
    transactionId
  );

  await deleteDoc(ref);
};

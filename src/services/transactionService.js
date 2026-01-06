import { collection, doc, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { auth } from "../firebase/firebaseConfig";
import { Alert } from 'react-native';


export const saveTransaction = async (transaction, resetCallback) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('Usuario no logueado');

    // Referencia al documento del usuario
    const userDocRef = doc(db, 'users', user.uid);

    // Referencia a la subcolección 'transactions'
    const transactionsRef = collection(userDocRef, 'transactions');

    // Agregar la transacción con ID automático
    await addDoc(transactionsRef, transaction);

    // Mostrar alerta de éxito
    Alert.alert(
      'Transacción añadida',
      'Tu transacción se ha guardado correctamente.',
      [{ text: 'OK' }]
    );

    // Limpiar estados en el componente
    if (resetCallback) resetCallback();

  } catch (error) {
    console.error('Error guardando la transacción:', error);
    Alert.alert('Error', 'No se pudo guardar la transacción.');
  }
};

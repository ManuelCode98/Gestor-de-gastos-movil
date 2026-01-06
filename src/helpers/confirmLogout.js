import { Alert } from 'react-native';

export const confirmLogout = (onConfirm) => {
  Alert.alert(
    'Cerrar sesión',
    '¿Seguro que deseas cerrar sesión?',
    [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Salir',
        style: 'destructive',
        onPress: onConfirm,
      },
    ],
    { cancelable: true }
  );

};

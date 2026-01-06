import { StyleSheet } from 'react-native';

export const AddTransactionStyle = StyleSheet.create({
  containerInput: {
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },

  input:{
    width: '80%',
    height: 52,
    backgroundColor: 'transparent',
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    color: 'white',
    
    // borde suave
    borderWidth: 1,
    borderColor: '#E5E7EB',

    // sombra (Android)
    elevation: 4,
  },
});
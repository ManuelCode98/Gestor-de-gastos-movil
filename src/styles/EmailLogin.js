import { StyleSheet } from 'react-native';

export const styleEmailLogin = StyleSheet.create({
  container: {
    width: '80%',
    marginTop: 20,
  },

  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  buttonDisabled: {
    backgroundColor: '#555555',
  },

  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#1c1c1e',
    marginBottom: 12,
  },

  text: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '600',
  },
});

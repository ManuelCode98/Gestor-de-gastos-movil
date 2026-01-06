import { StyleSheet } from "react-native";

export const HomeScreenStyle = StyleSheet.create({
    container: {
    // display: 'flex',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },

  containerHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 40,
    marginBottom: 10,
  },

  backgroundIcon: {
    backgroundColor: '#e74c3c',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
})
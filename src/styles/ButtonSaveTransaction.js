import { StyleSheet } from "react-native";

export const ButtonSaveTransactionStyle = StyleSheet.create({
  
    container: {
        backgroundColor: '#E38B36', // Indigo moderno
        width: 120,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,

        // sombra iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 8,

        // sombra Android
        elevation: 6,
    },

    text: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
});

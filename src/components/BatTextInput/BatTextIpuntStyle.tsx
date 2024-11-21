import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        marginTop:10
      },
      textoLabel: {
        fontSize: 14,
        marginBottom: 5,
        color: '#000',
      },
      input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
      },
      inputTextArea1: {
        height: 80, // Para áreas de texto maiores
        textAlignVertical: 'top',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
      },
      inputTextArea2: {
        height: 80, // Para áreas de texto maiores
        textAlignVertical: 'top',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
      },
      textoExp: {
        fontSize: 14,
        marginBottom: 5,
        color: '#000',
      },
      button: {
        backgroundColor: '#000',
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
      },
      buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
      },
    });
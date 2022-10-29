import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    form:{
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
    },
    inputName: {
        flex: 4,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFFF',
        padding: 16,
        fontSize: 16,
        marginRight: 12
    },
    inputNumber: {
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFFF',
        padding: 16,
        fontSize: 16,
        marginRight: 12        
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24
    },
});

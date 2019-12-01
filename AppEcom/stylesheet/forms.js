import { StyleSheet } from 'react-native';
import constants from './constants';

const style = StyleSheet.create({
    textbox: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: constants.color.dark,
        padding: 10,
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: constants.color.lgray,
        borderRadius: 10,
        fontSize: 16,
        width: '90%'
    }
});

export default style;

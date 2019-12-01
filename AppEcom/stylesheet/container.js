import { StyleSheet } from 'react-native';
import constants from './constants';

const box = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: constants.color.white,
        // alignItems: 'flex-start',
        justifyContent: 'flex-start'
    }
})

export default box;
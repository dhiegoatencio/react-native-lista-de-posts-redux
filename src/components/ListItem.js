import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const ListItem = ({
    item,
    onItemPress
}) => {
    const {title, id} = item;
    return (
        <TouchableOpacity
            style={styles.itemStyle}
            onPress={() => onItemPress(id)}>

        	<Text>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemStyle: {
        marginBottom: 10
    }
});

export default ListItem;
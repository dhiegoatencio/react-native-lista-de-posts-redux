import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';

class PostForm extends Component {
    render() {
        const {title, body} = this.props;
        return (
            <View>
                <Text style={styles.textLabel}>Title</Text>
                <TextInput value={title}
                    style={styles.textInput}
                    onChangeText={this.props.onTitleChange}
                />

                <Text style={styles.textLabel}>Content</Text>
                <TextInput value={body}
                    style={styles.textInput}
                    onChangeText={this.props.onBodyChange}
                />

                <TouchableOpacity 
                    style={styles.btn}
                    onPress={this.props.onCancelPress}
                >
                    <Text>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.btn}
                    onPress={this.props.onOkPress}
                >
                    <Text>OK</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textLabel: {
        fontWeight: 'bold'
    },
    textInput: {
        height: 80
    },
    btn: {
        borderWidth: 1,
        padding: 6,
        backgroundColor: 'antiquewhite',
        width: '50%',
        display: 'flex',
        justifyContent: 'center'

    }
});

export default PostForm;
import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import {changePostTitle, changePostBody, createPost} from '../actions';

class Postnew extends Component {
    constructor(props) {
        super(props);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onBodyChange = this.onBodyChange.bind(this);
        this.onOkPress = this.onOkPress.bind(this);
        this.onCancelPress = this.onCancelPress.bind(this);
    }
    onTitleChange(title) {
        this.props.changePostTitle(title);
    }
    onBodyChange(body) {
        this.props.changePostBody(body);
    }
    onOkPress() {
        const {title, body} = this.props;
        this.props.createPost({title, body});
        //Actions.list({ type: 'reset' });
        Actions.pop(); //volta para a scene anterior
    }
    onCancelPress() {
        Actions.pop();
    }
    render() {
        const {title, body} = this.props;

        return (
            <View>
                <Text style={styles.textLabel}>Title</Text>
                <TextInput value={title}
                    style={styles.textInput}
                    onChangeText={this.onTitleChange}
                />

                <Text style={styles.textLabel}>Content</Text>
                <TextInput value={body}
                    style={styles.textInput}
                    onChangeText={this.onBodyChange}
                />

                <TouchableOpacity 
                    style={styles.btn}
                    onPress={this.onCancelPress}
                >
                    <Text>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.btn}
                    onPress={this.onOkPress}
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

const mapStateToProps = (state) => {
    const {title, body} = state.postForm;
    return {title, body};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changePostTitle,
        changePostBody,
        createPost
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Postnew);
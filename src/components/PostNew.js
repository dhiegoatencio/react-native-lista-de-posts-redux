import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import {changePostTitle, changePostBody, createPost, resetPostForm} from '../actions';

import PostForm from './PostForm';

class Postnew extends Component {
    constructor(props) {
        super(props);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onBodyChange = this.onBodyChange.bind(this);
        this.onOkPress = this.onOkPress.bind(this);
        this.onCancelPress = this.onCancelPress.bind(this);
    }
    componentWillUnmount() {
        this.props.resetPostForm();
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
                <Text>New post</Text>
                <PostForm
                    onTitleChange={this.onTitleChange}
                    onBodyChange={this.onBodyChange}
                    onOkPress={this.onOkPress}
                    onCancelPress={this.onCancelPress}
                    title={title}
                    body={body}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const {title, body} = state.postForm;
    return {title, body};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changePostTitle,
        changePostBody,
        createPost,
        resetPostForm
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Postnew);
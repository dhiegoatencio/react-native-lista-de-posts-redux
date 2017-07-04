import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import PostForm from './PostForm';
import {changePostTitle, changePostBody, resetPostForm, updatePost, deletePost} from '../actions';

class PostEdit extends Component {
    constructor(props) {
        super(props);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onBodyChange = this.onBodyChange.bind(this);
        this.onOkPress = this.onOkPress.bind(this);
        this.onCancelPress = this.onCancelPress.bind(this);
        this.onDeletePress = this.onDeletePress.bind(this);
    }
    componentDidMount() {
        const {title, body} = this.props.selectedPost;
        this.props.changePostTitle(title);
        this.props.changePostBody(body);
    }
    componentWillUnmount() {
        this.props.resetPostForm();
    }
    onOkPress() {
        const {title, body, selectedPost} = this.props;
        this.props.updatePost({
            title,
            body,
            id: selectedPost.id,
        });
        Actions.pop();
    }
    onCancelPress() {
        Actions.pop();
    }
    onDeletePress() {
        this.props.deletePost(this.props.selectedPost.id);
        Actions.list({type: 'reset'});
    }
    onTitleChange(title) {
        this.props.changePostTitle(title);
    }
    onBodyChange(body) {
        this.props.changePostBody(body);
    }
    render() {
        const {title, body} = this.props;
        return (
            <View>
                <PostForm
                    onTitleChange={this.onTitleChange}
                    onBodyChange={this.onBodyChange}
                    onOkPress={this.onOkPress}
                    onCancelPress={this.onCancelPress}
                    title={title}
                    body={body}
                />

                <TouchableOpacity style={styles.btn}
                    onPress={this.onDeletePress}
                >
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    btn: {
        borderWidth: 1,
        padding: 6,
        backgroundColor: 'red',
        width: '50%',
        display: 'flex',
        justifyContent: 'center'

    }
});

const mapStateToProps = state => {
    return {
        selectedPost: state.posts.selected,
        title: state.postForm.title,
        body: state.postForm.body
    };
};
const mapDispatchToProps = {
    changePostBody,
    changePostTitle,
    resetPostForm,
    updatePost,
    deletePost
};

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);
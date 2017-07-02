import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import PostForm from './PostForm';
import {changePostTitle, changePostBody, resetPostForm} from '../actions';

class PostEdit extends Component {
    constructor(props) {
        super(props);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onBodyChange = this.onBodyChange.bind(this);
        this.onOkPress = this.onOkPress.bind(this);
        this.onCancelPress = this.onCancelPress.bind(this);
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

    }
    onCancelPress() {
        Actions.pop();
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
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedPost: state.posts.selected,
        title: state.postForm.title,
        body: state.postForm.body
    };
};
/*
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changePostTitle,
        changePostBody
    }, dispatch);
};*/
const mapDispatchToProps = {
    changePostBody,
    changePostTitle,
    resetPostForm
};

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { fetchPost } from '../actions';

class PostDetail extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.postId);
    }

    render() {
        const {post} = this.props;
        if (!post) {
            return (
                <Text>Loading post...</Text>
            );
        }

        return (
            <View>
                <Text style={styles.titleStyle}>
                    {post.title}
                </Text>
                <Text style={styles.bodyStyle}>
                    {post.body}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    bodyStyle: {
        fontSize: 16
    }
});

const mapStateToProps = (state) => {
    return { post: state.posts.selected };
};

export default connect(mapStateToProps, {
    fetchPost
})(PostDetail);
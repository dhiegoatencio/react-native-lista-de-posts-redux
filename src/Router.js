import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';

import List from './components/List';
import PostDetail from './components/PostDetail';
import PostNew from './components/PostNew';
import PostEdit from './components/PostEdit';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 60 }}>
            <Scene key="list"
                component={List}
                title="Posts"
                rightTitle="New"
                onRight={() => Actions.postNew()}
                initial />
            <Scene key="postDetail"
                component={PostDetail}
                title="Post Detail"
                rightTitle="Edit"
                onRight={() => Actions.postEdit()} />
            <Scene key="postEdit"
                component={PostEdit}
                title="Post Edit" />
            <Scene key="postNew"
                component={PostNew}
                title="New Post" />
        </Router>
    );
};

export default RouterComponent
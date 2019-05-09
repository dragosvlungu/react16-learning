import React, { Component } from 'react';
import { Route , NavLink, Switch} from 'react-router-dom';

import Posts from '../Posts/Posts';

import './Blog.css';

import asyncComponent from '../../hoc/asyncComponent/asyncComponent';
//import NewPost from '../NewPost/NewPost';
//import FullPost from '../FullPost/FullPost';

const AsyncNewPost = asyncComponent(() => {
    return import('../NewPost/NewPost');
})

class Blog extends Component {

    // state = {
    //     selectedPostId: null,
    //     error: false
    // }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts" 
                                exact
                                activeClassName="my-active"
                                activeStyle={{color: '#fa923f', textDecoration: 'underline'}}
                                >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/new-post" component={AsyncNewPost}/>
                    <Route path="/posts" component={Posts}/>
                    <Route render={() => <h1>Not found</h1>}/>
                    {/* <Redirect from="/" to="/posts"/> */}
                    {/* <Route path="/" component={Posts}/> */}
                    {/* <Route path="/:id" component={FullPost}/> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;
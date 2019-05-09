import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

import './Posts.css';

class Posts extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: null
    }

    componentDidMount() {
        console.log(this.props);
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(
                    post => {
                        return {
                            ...post,
                            author: 'Max'
                        }
                    }
                )
                this.setState({posts: updatedPosts});
            })
            .catch(error => {
                this.setState({error:true});
            });
    }

     
    postSelectedHandler = (id) => {
        //this.setState({selectedPostId: id});
        this.props.history.push({pathname: '/posts/' + id});
        //this.props.history.push('/' + id);
    }
    
    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>

        if(!this.state.error) {
            posts = this.state.posts.map(
                post => {
                    //return <Link key={post.id} to={'/' + post.id}> 
                    return    <Post
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}
                        />
                    //</Link>
                }
            );
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
            </div>
            
        );
    }
}

export default Posts;
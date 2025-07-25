import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // Lifecycle Method 1: componentDidMount
  componentDidMount() {
    this.loadPosts();
  }

  // Load posts using fetch API
  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const postList = data.map(
          post => new Post(post.id, post.title, post.body)
        );
        this.setState({ posts: postList });
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
      });
  }

  // Lifecycle Method 2: componentDidCatch
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    alert("Something went wrong while rendering posts!");
    console.error("Error caught in component:", error, info);
  }

  // Render the posts
  render() {
    if (this.state.hasError) {
      return <h2>Error loading posts.</h2>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map(post => (
          <div key={post.id} style={{ border: '1px solid gray', margin: '8px', padding: '7px' }}>
             <p><strong>ID:</strong> {post.id}</p>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;

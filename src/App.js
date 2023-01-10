import { Component } from "react";

import './global.css';
import './app.css';

class App extends Component{
  state = {//estado
      posts: []
    };

    componentDidMount(){
      this.loadPosts();
    }

    loadPosts = async () => {
      const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
      const photosRespose = fetch('https://jsonplaceholder.typicode.com/photos');

      const [posts, photos] = await Promise.all([postsResponse, photosRespose]);
     
      const postsJson = await posts.json();
      const photosJson = await photos.json();

      const postsAndPhotos = postsJson.map((post , index) => {
        return{ ...post, cover: photosJson[index].url }
      } ); 

      this.setState ({posts: postsAndPhotos});
    }


    render(){//renderizar novamente o componente porque o estado mudou 
      const { posts} = this.state;//pegando o arry
      return(
        <section>
          <div className="posts">

            {posts.map(post => (
              <div className="post">
                <img src={post.cover} alt={post.title}/>
                <div key={post.id} className="postCard">
                  <h1>{post.title}</h1>
                  <p>{post.body}</p>
                </div>
              </div> 
            ))}

          </div>
        </section>
      );
    }
}

export default App;

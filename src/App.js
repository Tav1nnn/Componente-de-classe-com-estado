import { Component } from "react";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {//estado
      posts: [// array
        {
          id: 1,
          title: 'O titulo 1',
          body: 'O corpo 1'
        },
        {
          id: 2,
          title: 'O titulo 2',
          body: 'O corpo 2'
        },
        {
          id: 3,
          title: 'O titulo 3',
          body: 'O corpo 3'
        }
      ]
    };
  }

    render(){//renderizar novamente o componente porque o estado mudou 
      const { posts} = this.state;//pegando o arry
      return(
        <>
          {posts.map(post => (
            <div>
              <h1 key={post.id}>{post.title}</h1>
              <p>{post.body}</p>
            </div>
             
          ))}
        </>
      );
    }
}

export default App;

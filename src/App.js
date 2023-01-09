import { Component } from "react";

class App extends Component{
  state = {//estado
      counter: 0,
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

    timeoutUpdate = null;

    componentDidMount(){
      this.handleTimeout();
    }

    componentDidUpdate(){
      this.handleTimeout();
    }

    componentWillUnmount(){
      clearTimeout(this.timeoutUpdate);
    }

    handleTimeout = () =>{
      const { posts, counter} = this.state;
      posts[0].title = 'title mudou'
      this.timeoutUpdate = setTimeout(()=>{
        this.setState({ posts, counter: counter+1 });
      }, 1000);
    }

    render(){//renderizar novamente o componente porque o estado mudou 
      const { posts, counter} = this.state;//pegando o arry
      return(
        <div>
          <h1>{counter}</h1>
          {posts.map(post => (
            <div>
              <h1 key={post.id}>{post.title}</h1>
              <p>{post.body}</p>
            </div>
             
          ))}
        </div>
      );
    }
}

export default App;

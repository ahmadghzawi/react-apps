import React, {Component} from 'react';
import CommentCard from './components/CommentCard';

class App extends Component {

  state = {
    name: "Ahmad Al-Ghzawi",
    nickName: "GHZ",

    comments : [
      {id: 1, text: "Hi there!", time: "2 Seconds ago"}
    ]
  }

  getComment = () => {
    if (this.commentBody.value.length ) {
      const text = this.commentBody.value;
      const comments = this.state.comments;
      const id = this.state.comments.length + 1;
      const time = "2 Seconds ago.";
      comments.push({id, text, time});
      this.setState({comments}); 
    }
    console.log(this.state.comments);
  }

  render () {
    const commentComponents = this.state.comments.map(comment => 
      <CommentCard 
        key={comment.id} 
        name={this.state.name} 
        nickName={this.state.nickName} 
        commentText={comment.text}
        time={comment.time}
      />)

    return (
      <div className="container">
        {commentComponents}
        <input ref={text => this.commentBody = text} className="mt-5" type = "text"/>
        <button onClick={this.getComment}>Comment</button>
      </div>
    )
  }

}
 
export default App;


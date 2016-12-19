import React from 'react';

const Index = React.createClass({
  getInitialState() {
    return(
      {
        author: '',
        comment: '',
        comments: []
      }
    )
  },

  

  render() {
    return(
      <div>
        <h1>This Is The Index Container</h1>
        {this.props.children}
      </div>
    )
  }
});

export default Index;
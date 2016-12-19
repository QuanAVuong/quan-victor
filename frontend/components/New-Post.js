import React from 'react';
import { Link } from 'react-router';

const NewPost = React.createClass({
  render() {
    return(
      <div>
        
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" id="username" />
          <label className="mdl-textfield__label" for="username">
            Username...
          </label>
        </div> 

        <br /> 

        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" id="comment" />
          <label className="mdl-textfield__label" for="comment">
            Comment...
          </label>
        </div>
      
      </div>
    )
  }
});

export default NewPost;
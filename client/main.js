import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';
class App extends Component{
   render(){
    return (
      <div>
        <ImageList/>
      </div>
    );
   };
};
Meteor.startup( ()=>{
ReactDOM.render(<App/>, document.querySelector('.container'));
});
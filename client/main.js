import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';
import axios from 'axios';
class App extends Component{
  componentWillMount(){
    //fantastic place to  load all data to be rendered in webpage
    console.log('App is about to be rendered');
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
      .then((response) => console.log(response));
    //A problem to solve is that it takes some time to receive the response from the server
    //Hence we need to do something to stop rendering till we dont receive response.
  }
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
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';
import axios from 'axios';
class App extends Component{

  constructor(props){
    super(props);
    this.state = { images:[] }
  }

  componentWillMount(){
    //fantastic place to  load all data to be rendered in webpage
    console.log('App is about to be rendered');
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
      .then((response) => this.setState({ images:response.data.data }));
      //NEVER DO THIS : this.state.images = [{}, {}]
  }

  //whenever state is updated, the component is automatically rendered again
  //hence, console is called 2 times
   render(){
     console.log(this.state.images)
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
import React, { Component } from 'react';
import MemesList from './MemesList';
import nosacz1 from '../img/nosacz1.jpg';
import nosacz2 from '../img/nosacz2.jpg';
import nosacz3 from '../img/nosaczWAucie.jpg';
import nosacz4 from '../img/nosacz4.jpg';
import './App.css';

class App extends Component {
  state = {
    regular: [
      {
        id: 0,
        title: "Nosacz na robocie",
        upvotes: 0,
        upvotesOnScreen: 0,
        downvotesOnScreen: 0,
        downvotes: 0,
        img: nosacz1,
      },
      {
        id: 1,
        title: "Sprytny nosacz",
        upvotes: 0,
        upvotesOnScreen: 0,
        downvotesOnScreen: 0,
        downvotes: 0,
        img: nosacz2,
      },
      {
        id: 2,
        title: "Nosacz w samchodzie",
        upvotes: 0,
        upvotesOnScreen: 0,
        downvotesOnScreen: 0,
        downvotes: 0,
        img: nosacz3,
      },
      {
        id: 3,
        title: "Nosacz o edukacji",
        upvotes: 0,
        upvotesOnScreen: 0,
        downvotesOnScreen: 0,
        downvotes: 0,
        img: nosacz4,
      }

    ],
    hot: []
  }

  handleThumbUp = (id) => {
    // console.log(this.state.regular[id].upvotes);
    const regular = [...this.state.regular];
    regular.forEach(mem => {
      if (mem.id === id) {
        mem.upvotes++;
        mem.upvotesOnScreen++;
      }
    })


    // regular[index].upvotes++;
    // regular[index].upvotesOnScreen++;

    this.setState({ regular });


  }

  handleThumbDown = (id) => {
    let regular = [...this.state.regular];
    const index = regular.findIndex(memes => memes.id === id);

    regular[index].upvotes--;
    regular[index].downvotesOnScreen--;


    this.setState({ regular });


  }

  render() {
    return (
      <div>
        <MemesList regular={this.state.regular} handleThumbUp={this.handleThumbUp} handleThumbDown={this.handleThumbDown} />
      </div>
    );
  }
}

export default App;
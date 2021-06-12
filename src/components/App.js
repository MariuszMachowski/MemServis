import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import RegularMemesList from './RegularMemesList';
import HotMemesList from './HotMemesList';
import StarMemesList from './StarMemesList';
import StartPage from './StartPage';
import ErrorPage from './ErrorPage';
import nosacz1 from '../img/nosacz1.jpg';
import nosacz2 from '../img/nosacz2.jpg';
import nosacz3 from '../img/nosacz6.jpg';
import nosacz4 from '../img/nosacz4.jpg';
import nosacz5 from '../img/nosacz5.jpg';
import nosacz7 from '../img/nosacz7.jpg';
import '../styles/App.css';

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
        star: false,
      },
      {
        id: 1,
        title: "Nosacz Janusz",
        upvotes: 0,
        upvotesOnScreen: 0,
        downvotesOnScreen: 0,
        downvotes: 0,
        img: nosacz2,
        star: false,
      },
      {
        id: 2,
        title: "Gdy sąsiad kupił nowe auto",
        upvotes: 0,
        upvotesOnScreen: 0,
        downvotesOnScreen: 0,
        downvotes: 0,
        img: nosacz3,
        star: false,
      },
      {
        id: 3,
        title: "Nosacz o edukacji",
        upvotes: 0,
        upvotesOnScreen: 0,
        downvotesOnScreen: 0,
        downvotes: 0,
        img: nosacz4,
        star: false,
      },
      {
        id: 4,
        title: "Nosacz na zakupach",
        upvotes: 0,
        upvotesOnScreen: 0,
        downvotesOnScreen: 0,
        downvotes: 0,
        img: nosacz5,
        star: false,
      },
      {
        id: 5,
        title: "Level nosacz",
        upvotes: 0,
        upvotesOnScreen: 0,
        downvotesOnScreen: 0,
        downvotes: 0,
        img: nosacz7,
        star: false,
      }
    ],
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
    this.setState({ regular });
  }

  handleThumbDown = (id) => {
    let regular = [...this.state.regular];
    const index = regular.findIndex(memes => memes.id === id);
    regular[index].upvotes--;
    regular[index].downvotesOnScreen--;
    this.setState({ regular });
  }

  handleStarChange = (id) => {
    let regular = [...this.state.regular];
    const index = regular.findIndex(memes => memes.id === id);
    console.log(index);
    regular[index].star = !regular[index].star;
    this.setState({ regular });
  }

  handleMenu = () => {
    const navigation = document.querySelector(".navigation");
    const bars = document.querySelector(".fa-bars");
    const times = document.querySelector(".fa-times");
    navigation.classList.toggle("move");
    bars.classList.toggle("disp");
    times.classList.toggle("disp");
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul className="navigation">
              <li><NavLink className="nav" to="/regular" >Regular</NavLink></li>
              <li><NavLink className="nav" to="/hot" >Hot</NavLink></li>
              <li><NavLink className="nav" to="/star" ><i className="star far fa-star"></i></NavLink></li>
            </ul>


          </nav>
          <div className="burger" onClick={this.handleMenu}>
            <i className="brg fas fa-bars"></i>
            <i className="brg fas disp fa-times"></i>
          </div>

          <Switch>
            <Route path='/regular' render={() => (
              <RegularMemesList regular={this.state.regular} handleStarChange={this.handleStarChange} handleThumbUp={this.handleThumbUp} handleThumbDown={this.handleThumbDown} />
            )} />
            <Route path='/hot' render={() => (
              <HotMemesList regular={this.state.regular} handleStarChange={this.handleStarChange} handleThumbUp={this.handleThumbUp} handleThumbDown={this.handleThumbDown} />
            )} />
            <Route path='/star' render={() => (
              <StarMemesList regular={this.state.regular} handleStarChange={this.handleStarChange} handleThumbUp={this.handleThumbUp} handleThumbDown={this.handleThumbDown} />
            )} />
            <Route exact path='/' render={() => (
              <StartPage />
            )} />
            <Route render={() => (
              <ErrorPage />
            )} />

          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from "react";
import SearchBox from "../../components/SearchBox.Component/SearchBox.Component";
import CardList from "../../components/CardList.Component/CardList.Component";
import Scroll from "../../components/Scroll.Component/Scroll.Component";
import ErrorBoundry from "../../components/ErrorBoundry.Component/ErrorBoundry.Component";
// import { robots } from "./robots.js";
import "./App.Styles.css";

class App extends Component {
  constructor() {
    super();
    //! state are things that can change, they like on the parent component
    this.state = {
      //   * robots: robots,   //* loading from local file not realistic.
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchCahnge = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name
        .toLocaleLowerCase()
        .includes(searchfield.toLocaleLowerCase());
    });
    // * quick way to display somethign while loading
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      // ! this sintax <> </> its a shorthand function for react fragments that allows
      // ! us to return more than one html element.
      <>
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchCahnge} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      </>
    );
  }
}

export default App;

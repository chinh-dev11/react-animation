import React, { Component } from "react";
import Transition from 'react-transition-group/Transition';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false
  };

  showModal = () => {
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
  }

  render() {
    const transitionDuration = 1000;
    const transitionStyles = { // 4 transition states
      entering: { opacity: 1 },
      entered: { opacity: 1 },
      exiting: { opacity: 0 },
      exited: { opacity: 0 },
    };
    const transitionDefaultStyle = {
      transition: `opacity ${transitionDuration}ms ease-in-out`,
      opacity: 0
    };
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() => {
            this.setState(prevState => ({
              showBlock: !prevState.showBlock
            }));
          }}>Toggle</button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={transitionDuration}
          mountOnEnter
          unmountOnExit>
          {transitionState => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                // transition: "opacity 1s ease-out",
                // opacity: transitionState === "exiting" ? 0 : 1
                ...transitionDefaultStyle,
                ...transitionStyles[transitionState]
              }}
            >{transitionState}
            </div>
          )}
        </Transition>
        <br />
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        {this.state.modalIsOpen ? <Backdrop show closed={this.closeModal} /> : null}
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;

import React from 'react';
// import Transition from 'react-transition-group/Transition';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Modal.css';

const modal = (props) => {
    const animationTiming = {
        enter: 400,
        exit: 1000
    };
    return (
        <CSSTransition
            in={props.show}
            // timeout={300} // REM: time between entering and exiting states. Caution: be aware the difference timing between transition timeout (500) and the one in css file (animation: openModal 0.4s ease-out forwards), it could lead to unexpected behaviour since the animation in css file is cut shorter
            timeout={animationTiming} // same timing as in css file
            mountOnEnter
            unmountOnExit
            // classes from css file, to be added on different transition states
            // classNames="fade-slide"
            // customizing css className, instead of using fade-slide classes as above
            classNames={{
                enter: '',
                enterActive: 'ModalOpen',
                exit: '',
                exitActive: 'ModalClosed'
                // the 2 following states to be used on elements that are unconditionally added to the DOM (as with h1 and button below) to animate when they appear in the DOM/on the page
                // appear:
                // appearActive
            }}
        >
            <div className="Modal">
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>
        </CSSTransition>
    );
};

export default modal;
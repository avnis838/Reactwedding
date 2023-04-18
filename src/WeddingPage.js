import React from "react";
import { useSpring, animated } from "react-spring";

class WeddingPage extends React.Component {
  render() {
    const greetingAnimation = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      delay: 1000,
    });

    const buttonAnimation = useSpring({
      from: { transform: "scale(1)" },
      to: [
        { transform: "scale(1.2)", config: { duration: 200 } },
        { transform: "scale(1)", config: { duration: 200 } },
      ],
    });

    return (
      <div className="wedding-page">
        <animated.h1 style={greetingAnimation}>
          Welcome to our Wedding Page!
        </animated.h1>
        <div className="buttons">
          <animated.button className="bride-button" style={buttonAnimation}>
            For the Bride
          </animated.button>
          <animated.button className="groom-button" style={buttonAnimation}>
            For the Groom
          </animated.button>
        </div>
      </div>
    );
  }
}

export default WeddingPage;

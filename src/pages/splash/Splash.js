import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import LoaderLogo from "../../components/Loader/animation.gif";
import { greeting } from "../../portfolio";
function AnimatedSplash(props) {
  const theme = props.theme;
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: props.theme.splashBg }}>
        {/* <LoaderLogo id="logo" theme={props.theme} /> */}
        <img
          src={LoaderLogo}
          alt="loading..."
          style={{
            width: "30%",
            height: "45%",
            border: "1px solid",
            borderRadius: "10px",
          }}
        />{" "}
        <br />
        <div>
          <span style={{ color: "white" }}> &lt;</span>
          <span className="logo-name" style={{ color: "white" }}>
            {`...Loading my Awesomeness!!`}
          </span>
          <span style={{ color: "white" }}>/&gt;</span>
        </div>
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 3000);
  }

  componentWillMount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <AnimatedSplash theme={this.props.theme} />
    );
  }
}

export default Splash;

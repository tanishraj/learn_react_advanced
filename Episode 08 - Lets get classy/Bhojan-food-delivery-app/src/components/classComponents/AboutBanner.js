import React from "react";

class AboutBanner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="masthead">
        <p className="masthead-intro">{this.props.intro}</p>
        <h1 className="masthead-heading">{this.props.name}</h1>
      </header>
    );
  }
}

export default AboutBanner;

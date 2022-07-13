import React from "react";

export default class SingleLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, url, section, date } = this.props.link;

    return (
      <div className="link wrapper">
        <span class='link title'>{title}</span>
        <span class='link section'>{section}</span>
        <span class='link url'>{url}</span>
      </div>
    );
  }
}
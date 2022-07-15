import React from "react";

export default class SingleLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, url, section, date } = this.props.link;

    return (
      <div className="link wrapper">
        <span className='link title'>{title}</span>
        <span className='link section'>{section}</span>
        <span className='link url'>{url}</span>
      </div>
    );
  }
}
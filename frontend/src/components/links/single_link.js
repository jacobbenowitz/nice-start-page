import React from "react";

export default class SingleLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, url, section, date, metaData } = this.props.link;
    let image, icon;

    if ('image' in metaData) {
      image = <img src={metaData.image} alt={title} />;
    } else if ('og:image' in metaData) {
      image = <img src={metaData['og:image']} alt={title}
        style={{ width: '32px' }}
      />;
    }
    if ('icon' in metaData) {
      icon = <img src={metaData.icon} alt={title} />;
    }

    return (
      <div className="link wrapper">
        {icon ? icon : image ? image : null}
        <span className='link title'>{title}</span>
        <span className='link section'>{section}</span>
        <span className='link url'>{url}</span>
      </div>
    );
  }
}
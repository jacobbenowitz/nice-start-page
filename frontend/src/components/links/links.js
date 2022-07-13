import React from "react";
import SingleLink from "./single_link";

const IDLE = 'IDLE';
const LOADING = 'LOADING';
const DONE = 'DONE';

export default class Links extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [],
      status: IDLE
    }
  }

  componentDidMount() {
    if (this.state.status === IDLE) {
      this.props.fetchUserLinks(this.props.currentUser.id);
      this.setState({ status: LOADING });
    }
  }

  componentDidUpdate() {
    const { links } = this.props;
    if (this.state.status === LOADING && links.length > 0) {
      this.setState({
        links: links,
        status: DONE,
      });
    }
  }

  render() {
    const { links, status } = this.state;
    let title, linkList;

    if (status !== DONE) {
      title = <h2>Loading links...</h2>;
      linkList = <div className="placeholder">..........</div>;
    } else {
      title = <h2>Links</h2>;
      linkList = links.map(link => {
        <SingleLink
          key={link.id}
          link={link}
        />
      });
    };

    return (
      <div className="links container">
        {title}
        {linkList}
      </div>
    );
  }
}
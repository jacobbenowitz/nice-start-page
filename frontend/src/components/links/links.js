import React from "react";
import SingleLink from "./single_link";
import NewLinkContainer from "./new_link_container";

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
    const { links, linksStatus } = this.props;
    if (this.state.status === LOADING && linksStatus === DONE) {
      this.setState({
        links: Object.values(links),
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
      linkList = links.map(link =>
        <SingleLink
          key={link._id}
          link={link}
        />
      );
    };

    return (
      <>
        {/* <NewLinkContainer /> */}
        <div className="links container">
          {title}
          {linkList}
        </div>
      </>
    );
  }
}
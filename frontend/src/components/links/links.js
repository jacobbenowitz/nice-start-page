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
    const { linksStatus } = this.props;
    if (this.state.status === LOADING && linksStatus === DONE) {
      this.setState({
        status: DONE,
      });
    }
  }

  render() {
    const { status } = this.state;
    const { links } = this.props;
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
        <NewLinkContainer />
        <div className="links container">
          {title}
          {linkList}
        </div>
      </>
    );
  }
}
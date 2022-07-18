import React from "react";
import LinksContainer from "./links_container";
import NewLinkContainer from "./new_link_container";

const IDLE = 'IDLE';
const LOADING = 'LOADING';
const DONE = 'DONE';

const sample = [
  {
    label: 'Main',
    links: [
      { title: "YouTube", url: "https://www.youtube.com/" },
      { title: "Google", url: "https://www.google.com/" },
      { title: "Gmail", url: "https://www.gmail.com/" },
    ]
  },
  {
    label: 'Work',
    links: [
      { title: "React Docs", url: "https://reactjs.org/docs/getting-started.html" },
      { title: "Google Fonts", url: "https://fonts.google.com/" }
    ]
  }
]

export default class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     status: IDLE
  //   }
  // }

  // componentDidMount() {
  //   if (this.state.status === IDLE) {
  //     this.props.fetchUserLinks(this.props.currentUser.id);
  //     this.setState({ status: LOADING });
  //   }
  // }

  // componentDidUpdate() {
  //   const { linksStatus } = this.props;
  //   if (this.state.status === LOADING && linksStatus === DONE) {
  //     this.setState({
  //       status: DONE,
  //     });
  //   }
  // }

  render() {
    return (
      <>
        <NewLinkContainer />
        <LinksContainer 
          userData={sample}
        />
      </>
    )
  }
}
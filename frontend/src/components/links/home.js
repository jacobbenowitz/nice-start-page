import React from "react";
import Links from "./links";
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
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserLinks(this.props.currentUser.id);
  }

  render() {
    return (
      <>
        <NewLinkContainer />
        <Links
          userData={this.props.links}
        />
      </>
    )
  }
}
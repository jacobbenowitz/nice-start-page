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
        <div className="w-screen mx-9 flex flex-col">
          {title}
          <div className="grid grid-cols-autoFill-300 
            w-full h-full max-w-full gap-2 items-start place-content-center">
            
            <div className="bg-gray-800 rounded-sm p-2">
              <span className="text-lg font-bold">Section</span>
              <div className="flex justify-center items-center 
              min-h-150 bg-gray-50 my-2">
                <span className="text-gray-900 font-medium text-lg">Test</span>
              </div>
              <div className="flex justify-center items-center 
              min-h-150 bg-gray-50 my-2">
                <span className="text-gray-900 font-medium text-lg">Test</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-sm p-2">
              <span className="text-lg font-bold">Section</span>
              <div className="flex justify-center items-center 
              min-h-150 bg-gray-50 my-2">
                <span className="text-gray-900 font-medium text-lg">Test</span>
              </div>
              <div className="flex justify-center items-center 
              min-h-150 bg-gray-50 my-2">
                <span className="text-gray-900 font-medium text-lg">Test</span>
              </div>
              <div className="flex justify-center items-center 
              min-h-150 bg-gray-50 my-2">
                <span className="text-gray-900 font-medium text-lg">Test</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-sm p-2">
              <span className="text-lg font-bold">Section</span>
              
            </div>

          </div>
          {linkList}
        </div>
      </>
    );
  }
}
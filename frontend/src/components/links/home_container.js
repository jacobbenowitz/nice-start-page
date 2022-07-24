import { connect } from "react-redux";
import Home from "./home";

import {
  deleteLink,
  fetchUserLinks,
  updateLink,
  fetchLinks,
  updateLinkIdx
} from "../../actions/link_actions";
import { buildLinksProps } from "../../reducers/selectors";

const mapStateToProps = ({ links, errors, session }) => {
  return {
    allLinks: links.user,
    links: buildLinksProps(Object.values(links.user)),
    errors: errors.links,
    currentUser: session.user,
    linksStatus: links.status
  };
}

const mapDispatchToProps = dispatch => {
  return {
    deleteLink: linkId => dispatch(deleteLink(linkId)),
    fetchUserLinks: userId => dispatch(fetchUserLinks(userId)),
    fetchLinks: () => dispatch(fetchLinks()),
    updateLink: link => dispatch(updateLink(link)),
    updateLinkIdx: (linkId, linkIdx, linkSection) =>
      dispatch(updateLinkIdx(linkId, linkIdx, linkSection))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
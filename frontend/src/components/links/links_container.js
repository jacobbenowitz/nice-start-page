import { connect } from "react-redux";
import Links from "./links";
import {
  deleteLink,
  fetchUserLinks,
  updateLink,
  fetchLinks
} from "../../actions/link_actions";

const mapStateToProps = ({ links, errors, session }) => {
  return {
    allLinks: Object.values(links.all),
    links: Object.values(links.user),
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Links)
import { connect } from "react-redux";
import { createLink } from "../../actions/link_actions";
import { updateLayout } from "../../actions/session_actions";
import NewLink from "./new_link";

const mapStateToProps = ({errors, session}) => {
  return {
    errors: errors.linksErrors,
    currentUser: session.user
  };
}

const mapDispatchToProps = dispatch => {
  return {
    createLink: link => dispatch(createLink(link))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewLink);
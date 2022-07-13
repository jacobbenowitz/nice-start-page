import React from "react";

const initialState = {
  title: "",
  url: "",
  section: "",
  errors: []
}
export default class NewLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: "",
      section: "",
      errors: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    const { title, url, section } = this.state;
    e.preventDefault();

    const link = {
      user: this.props.currentUser.id,
      title: title,
      url: url,
      section: section,
      date: Date.now()
    }
    this.props.createLink(link);
    this.setState(initialState);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className="link form wrapper">
        <form onSubmit={this.handleSubmit}>
          <span className="link form title">
            New Link
          </span>

          <label className="form label" htmlFor="title">
            Title
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.update("title")}
              className="form input text"
            />
          </label>

          <label className="form label" htmlFor="section">
            Section
            <input
              type="text"
              name="section"
              value={this.state.section}
              onChange={this.update("section")}
              className="form input text"
            />
          </label>

          <label className="form label" htmlFor="link">
            Link
            <input
              type="text"
              name="link"
              value={this.state.url}
              onChange={this.update("url")}
              className="form input text url"
            />
          </label>

          <input type="submit" value="Submit" className="form submit" />
        </form>
      </div>
    );
  }
};
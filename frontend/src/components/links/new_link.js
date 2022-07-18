import React from "react";
import InputText from "../form/input_text";

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
      <div className="pt-8 w-screen flex items-center justify-center place-content-center">
        <form className="flex flex-row gap-4 bg-gray-800 px-12 py-6 rounded-xl"
          onSubmit={this.handleSubmit}>
          <span className="mr-4">New Link</span>
          <InputText
            label="Title"
            name="link-title"
            placeholder="Link title"
            value={this.state.title}
            handleChange={this.update("title")}
          />
          <InputText
            label="Section"
            name="link-section"
            placeholder="Main"
            value={this.state.section}
            handleChange={this.update("section")}
          />
          <InputText
            label="Link URL"
            name="link-url"
            placeholder="https://www.link.com"
            value={this.state.url}
            handleChange={this.update("url")}
          />

          <button type='submit'
            className='bg-gray-300 font-bold text-center w-max text-gray-900
            px-4 py-1 rounded-md h-10 self-end
            hover:bg-gray-50
            focus:ring-2 focus:ring-amber-300'>
            Create link
          </button>
        </form>
      </div>
    );
  }
};
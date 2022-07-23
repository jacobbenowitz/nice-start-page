import React, { useState, useEffect } from "react";
import LabeledInput from "../form/labeled_input";

const initialState = {
  title: "",
  url: "",
  section: "",
  errors: []
}

const NewLink = props => {

  const [link, updateLink] = useState(initialState);
  
  const handleSubmit = e => {
    e.preventDefault();

    const newLink = {
      user: props.currentUser.id,
      title: link.title,
      url: link.url,
      section: link.section,
      date: Date.now()
    }
    props.createLink(newLink);
    updateLink(initialState);
    props.cancel()
  }

  const update = (field) => {
    return e => updateLink({
      ...link, [field]: e.currentTarget.value
    });
  }

  return (
    <div className="pt-8 w-screen flex items-center justify-center place-content-center">
      <form className="flex flex-col gap-4 bg-gray-800 px-12 py-6 rounded-xl"
        onSubmit={handleSubmit}>
        <span className="mr-4 text-xl font-bold">New Link</span>
        <LabeledInput
          type="text"
          id="new-title"
          label="Title"
          name="link-title"
          placeholder="Link title"
          value={link.title}
          handleChange={update("title")}
        />
        <LabeledInput
          type="text"
          id="new-section"
          label="Section"
          name="link-section"
          placeholder="Main"
          value={link.section}
          handleChange={update("section")}
        />
        <LabeledInput
          type="url"
          label="Link URL"
          name="link-url"
          placeholder="https://www.link.com"
          value={link.url}
          handleChange={update("url")}
        />
        <div className="flex flex-row gap-4">
          <button
            onClick={props.cancel}
            className='bg-transparent font-bold text-center w-max px-4 py-1 rounded-md h-10 self-end ring-1 text-gray-50 ring-amber-700
            hover:ring-2 hover:ring-amber-500
            focus:ring-2 focus:ring-amber-300'>
            Cancel
          </button>
          <button type='submit'
            className='bg-gray-300 font-bold text-center w-max text-gray-900
            px-4 py-1 rounded-md h-10 self-end
            hover:bg-gray-50
            focus:ring-2 focus:ring-amber-300'>
            Create link
          </button>
        </div>
      </form>
    </div>
  )
};

export default NewLink;
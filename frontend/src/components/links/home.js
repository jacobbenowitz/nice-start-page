import React, { useEffect, useState } from "react";
import LargeModal from "../modals/large_modal";
import Links from "./links";
import NewLinkContainer from "./new_link_container";

const IDLE = 'IDLE';
const LOADING = 'LOADING';
const DONE = 'DONE';

// const sampleLinks = [
//   {
//     label: 'Main',
//     links: [
//       { title: "YouTube", url: "https://www.youtube.com/" },
//       { title: "Google", url: "https://www.google.com/" },
//       { title: "Gmail", url: "https://www.gmail.com/" },
//     ]
//   },
//   {
//     label: 'Work',
//     links: [
//       { title: "React Docs", url: "https://reactjs.org/docs/getting-started.html" },
//       { title: "Google Fonts", url: "https://fonts.google.com/" }
//     ]
//   }
// ]

const Home = (props) => {

  const [status, setStatus] = useState(IDLE);
  const [newModal, toggleNewModal] = useState(false);
  const [editModal, toggleEditModal] = useState(false);

  useEffect(() => {
    if (status === IDLE) {
      props.fetchUserLinks(props.currentUser.id)
        .then(() => setStatus(DONE))
    }
  })

  const close = (modal) => {
    modal === "new" ? toggleNewModal(false) :
      toggleEditModal(false)
  }

  const open = (modal) => {
    modal === "new" ? toggleNewModal(true) :
      toggleEditModal(true)
  }


  return (
    <>
      <button
        onClick={() => open('new')}>
        New Link
      </button>
      {newModal && <LargeModal
        content={<NewLinkContainer cancel={() => close('new')} />} handleClose={() => close('new')} />}
      {props.linksStatus === DONE ? (
        <Links
          userData={props.links}
        />
      ) :
        <div>
          <span>Loading links...</span>
        </div>
      }
    </>
  )
}

export default Home;
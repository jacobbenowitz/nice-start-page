import React, { useEffect, useState } from "react";
import LargeModal from "../modals/large_modal";
import EditLinkContainer from "./edit_link_container";
import Links from "./links";
import NewLinkContainer from "./new_link_container";
import { MdOutlineAddCircle } from "react-icons/md"

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
  const [editId, setEditId] = useState(undefined)

  useEffect(() => {
    if (status === IDLE) {
      props.fetchUserLinks(props.currentUser.id)
        .then(() => setStatus(DONE))
    }
  })

  const close = (modal) => {
    setEditId(undefined)
    modal === "new" ? toggleNewModal(false) :
      toggleEditModal(false)
  }

  const open = (modal, id = undefined) => {
    setEditId(id);
    modal === "new" ? toggleNewModal(true) :
      toggleEditModal(true)
  }


  return (
    <>
      <div className="absolute bottom-8 right-8">
        <button className="cursor-pointer"
          onClick={() => open('new')}>
          <MdOutlineAddCircle size="32" />
        </button>
      </div>
      {
        newModal && <LargeModal content={
          <NewLinkContainer cancel={() => close('new')} />
        }
          handleClose={() => close('new')} />
      }
      {
        editModal && <LargeModal content={
          <EditLinkContainer linkId={editId}
            cancel={() => close('edit')} />
        }
          handleClose={() => close('edit')} />
      }

      {
        props.linksStatus === DONE ? (
          <Links
            userData={props.links}
            open={open}
            updateLink={props.updateLink}
            updateLinkIdx={props.updateLinkIdx}
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
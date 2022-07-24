import React, { useEffect, useState } from "react";
import LargeModal from "../modals/large_modal";
import EditLinkContainer from "./edit_link_container";
import Links from "./links";
import NewLinkContainer from "./new_link_container";
import { MdOutlineAddCircle } from "react-icons/md"

const IDLE = 'IDLE';
const LOADING = 'LOADING';
const DONE = 'DONE';

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
    <div className="relative w-full box-border overflow-y-auto">
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
            updateLinkIdx={props.updateLinkIdx}
          />
        ) :
          <div>
            <span>Loading links...</span>
          </div>
      }
    </div>
  )
}

export default Home;
import React, { useEffect, useState } from "react";
import LargeModal from "../modals/large_modal";
import EditLinkContainer from "./edit_link_container";
import Links from "./links";
import NewLinkContainer from "./new_link_container";
import { motion, AnimatePresence } from "framer-motion";
import NewLinkButton from "../buttons/new_link_button";
import Clock from "../widgets/clock";
import GoogleSearch from "../widgets/google_search"

const IDLE = 'IDLE';
const LOADING = 'LOADING';
const DONE = 'DONE';

const Home = (props) => {

  const [status, setStatus] = useState(IDLE);
  const [newModal, toggleNewModal] = useState(false);
  const [editModal, toggleEditModal] = useState(false);
  const [editId, setEditId] = useState(undefined)

  useEffect(async () => {
    if (status === IDLE) {
      await props.fetchCurrentUser()
      await props.fetchUserLinks(props.currentUser.id)
      setStatus(DONE)
    }
  })

  // useEffect(() => {
  //   props.fetchCurrentUser()
  // }, props.currentUser)

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
    <div className="absolute w-full box-border h-full overflow-hidden">
      <NewLinkButton
        open={() => open('new')}
      />
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {
          newModal && <LargeModal content={
            <NewLinkContainer
              cancel={() => close('new')}
              links={props.links}
            />
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
      </AnimatePresence>
      <Clock />
      <GoogleSearch />
      {
        props.linksStatus === DONE && status === DONE ? (
          <Links
            userData={props.links}
            open={open}
            updateLink={props.updateLink}
            deleteLink={props.deleteLink}
            updateLayout={props.updateLayout}
            layout={props.layout}
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
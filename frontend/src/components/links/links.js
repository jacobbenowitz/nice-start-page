import React, { useState, useRef, useEffect } from "react";
import Clock from "../widgets/clock";
import DraggableLink from "./draggable_link";
import LinkPlaceholder from "./link_placeholder";

const Links = ({ userData }) => {

  const [links, updateLinks] = useState(userData);
  const [dragging, toggleDragging] = useState(false);

  useEffect(() => {
    updateLinks(userData)
  }, userData)

  const dragItem = useRef();
  const dragNode = useRef();

  const handleDragStart = (e, params) => {
    dragItem.current = params;
    dragNode.current = e.target;
    // const width = dragNode.current.offsetWidth;
    // const height = dragNode.current.offsetHeight;

    // const dragImg = document.createElement("canvas")
    // dragImg.width = width;
    // dragImg.height = height;
    // dragImg.className = "invisible"

    // const ctx = dragImg.getContext("2d")
    // ctx.fillStyle = "rgb(47, 68, 105)"
    // ctx.fillStyle = "#FFD369"
    // ctx.fillRect(0, 0, width, height)
    // document.body.append(dragImg)
    // e.dataTransfer.setData("text/plain", params)
    // e.dataTransfer.setDragImage(dragImg, 0, 0)

    dragNode.current.addEventListener('dragend', handleDragEnd)
    dragNode.current.addEventListener('drop', handleDrop)
    setTimeout(() => {
      toggleDragging(true)
    }, 0)
  }

  const handleDragEnd = () => {
    toggleDragging(false)
    dragNode.current.removeEventListener('dragend', handleDragEnd)
    dragNode.current.removeEventListener('drop', handleDrop)
    dragItem.current = null;
    dragNode.current = null;
  }

  const handleDragEnter = (e, params) => {
    // prevent default to allow drop event to fire
    e.preventDefault();
    const currentLink = dragItem.current;
    if (e.target !== dragNode.current) {
      updateLinks(prevLinks => {
        // deep dup - not the best way but get's the job done
        let newLinks = JSON.parse(JSON.stringify(prevLinks))
        // reorder newList, currLink new location is in params
        newLinks[params.sectionIdx].links.splice(
          params.linkIdx, 0, newLinks[currentLink.sectionIdx].links
            .splice(currentLink.linkIdx, 1)[0])
        // switched links, so need to update ref
        dragItem.current = params;
        return newLinks;
      })
    }
    return false;
  }

  const handleDragLeave = e => {
    e.preventDefault();
  }

  const handleDragOver = e => {
    e.preventDefault();
  }

  const handleDrop = e => {
    e.stopPropagation();
    return false;
  }

  const dragStyles = (sectionIdx, linkIdx) => {
    const currItem = dragItem.current;
    const width = dragNode.current.offsetWidth;
    const height = dragNode.current.offsetHeight;

    if (currItem.sectionIdx === sectionIdx &&
      currItem.linkIdx === linkIdx
    ) {
      return `flex flex-col justify-center items-center w-min p-4 w-[${width}] h-[${height}] bg-gray-600 my-2 text-center opacity-80 rounded-md ring-2 ring-amber-300`
    }
    return `flex flex-col justify-center items-center w-min p-4 w-[${width}] h-[${height}] bg-gray-600 my-2 text-center opacity-40 rounded-md `
  }

  return (
    <div className="w-screen px-9 py-5 flex flex-col">
      <div className="grid grid-cols-autoFill-300 w-full h-full max-w-full gap-2 items-start place-content-center">
        <Clock />
        {links.map((section, sectionIdx) => (
          <div
            key={`section-${sectionIdx}`}
            className="bg-gray-800 rounded-sm p-2"
            onDragEnter={dragging && !section.links.length ?
              (e) => handleDragEnter(e, { sectionIdx, itemI: 0 }) : null}
          >
            <div>
              <h5 className="mb-4 mt-0">{section.label}</h5>
            </div>
            <div className="flex flex-row flex-wrap gap-1">
              {section.links.map((link, linkIdx) => (
                <DraggableLink
                  key={`${section.label}-${linkIdx}`}
                  title={link.title}
                  hostname={link.hostname}
                  url={link.url}
                  metaData={link.metaData || {}}
                  dragging={dragging}
                  sectionIdx={sectionIdx}
                  linkIdx={linkIdx}
                  dragStyles={dragStyles}
                  dragStart={handleDragStart}
                  dragEnter={handleDragEnter}
                  dragOver={handleDragOver}
                  dragLeave={handleDragLeave}
                />
              ))}
              <LinkPlaceholder />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Links;
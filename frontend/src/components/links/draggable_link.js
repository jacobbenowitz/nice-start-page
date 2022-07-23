import React, { useState, useEffect, useRef } from "react";
import { MdDragIndicator } from "react-icons/md"
import { MdModeEdit } from "react-icons/md"
import IconButton from "../buttons/icon_button";

const DraggableLink = ({
  title, url, hostname, metaData, dragStart, dragEnter, dragOver, dragLeave,
  dragging, dragStyles, sectionIdx, linkIdx }) => {

  const [hover, toggleHover] = useState(false);

  const handleMouseIn = () => {
    toggleHover(true)
  }
  const handleMouseOut = () => {
    toggleHover(false)
  }

  let image, icon;

  if ('image' in metaData) {
    image = <img src={metaData.image} alt={title} />;
  }
  else if ('og:image' in metaData) {
    image = <img src={metaData['og:image']} alt={title}
      style={{ width: '32px' }}
    />
  }
  if ('icon' in metaData) {
    icon = <img src={metaData.icon} alt={title} />;
  }

  return (
    <div
      draggable
      onDragStart={e => dragStart(e, { sectionIdx, linkIdx })}
      onDragEnter={dragging ? e => dragEnter(e, { sectionIdx, linkIdx }) : null}
      onDragOver={dragOver}
      onDragLeave={dragLeave}
      onMouseOver={handleMouseIn}
      onMouseOut={handleMouseOut}
      className={dragging ?
        dragStyles(sectionIdx, linkIdx)
        : "flex flex-col justify-center items-center w-min min-h-40 hover:bg-gray-600 bg-opacity-50 my-2 text-center box-border p-4 rounded-md relative"
      }>
      {/* edit + drag icons */}
      <div
        onMouseOver={handleMouseIn}
        onMouseOut={handleMouseOut}
        // className={"flex flex-col absolute -left-7 top-0 bg-gray-50"}
        className={hover ? "flex flex-col absolute -left-7 top-0 bg-transparent" : "hidden"}
        id="link-icons"
      >
        <IconButton icon={<MdDragIndicator size="22" />} />
        <IconButton icon={<MdModeEdit size="22" />} />
      </div>
      {/* link icon and container */}
      <a href={url} target="_blank"
        className="flex flex-col items-center justify-center gap-1"
      >
        <div
          className="flex justify-center items-center max-w-9 max-h-9 w-9 h-9 bg-gray-900 rounded-md p-1 box-border">
          <div href={url} target="_blank"
            className="p-1" >
            {icon || image || title.slice(0, 2).toUpperCase()}
          </div>
        </div>
        <span className="text-gray-50 font-medium text-sm whitespace-nowrap">
          {title}
        </span>
        {/* show hostname link on hover */}
        {/* <div>
          <span className="text-gray-200 text-sm link max-w-full">
            {hostname}
          </span>
        </div> */}
      </a>
    </div>
  )
}

export default DraggableLink;
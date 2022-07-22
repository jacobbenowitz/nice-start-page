import React, { useState, useEffect } from "react";
import { MdDragIndicator } from "react-icons/md"
import { MdModeEdit } from "react-icons/md"
import IconButton from "../buttons/icon_button";

const DraggableLink = ({
  title, url, metaData, dragStart, dragEnter, dragOver, dragLeave,
  dragging, dragStyles, sectionIdx, linkIdx }) => {

  const [hover, toggleHover] = useState(false)

  const handleHover = e => {
    e.preventDefault();
    console.log(hover)
    toggleHover(!hover)
  }

  let image, icon;
  if ('image' in metaData) {
    image = <img src={metaData.image} alt={title} />;
  } else if ('og:image' in metaData) {
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
      onMouseEnter={toggleHover}
      onMouseOut={toggleHover}
      className={dragging ?
        dragStyles(sectionIdx, linkIdx)
        : "flex flex-col justify-center items-center w-min min-h-40 bg-gray-600 bg-opacity-50 my-2 text-center box-border p-4 rounded-md relative"
      }>
      {/* edit + drag icons */}
      <div className={hover ? "flex flex-col absolute -left-8 top-0" : "hidden"}>
        <IconButton icon={<MdDragIndicator size="22" />} />
        <IconButton icon={<MdModeEdit size="18" />} />
      </div>
      {/* link icon and container */}
      <div
        className="flex justify-center items-center max-w-9 max-h-9 w-9 h-9 bg-gray-800
        rounded-md p-1 box-border">
        <a href={url} target="_blank"
          className=" bg-gray-400 bg-opacity-30 rounded-full p-1" >
          {icon || image || title.slice(0, 2).toUpperCase()}
        </a>
      </div>
      <span className="text-gray-50 font-medium text-sm">
        {title}
      </span>
    </div>
  )
}

export default DraggableLink;
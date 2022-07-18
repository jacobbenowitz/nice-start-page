import React from "react";

const DraggableLink = ({
  title, url, dragStart, dragStatus,
  dragStyles, sectionIdx, linkIdx }) => {

  return (
    <div
      draggable
      onDragStart={dragStart}
      className={dragStatus ?
        dragStyles(sectionIdx, linkIdx)
        : "flex flex-col justify-center items-center min-h-150 bg-gray-50 my-2 text-center"
      }>
      <span className="text-gray-900 font-medium text-lg">
        {title}
      </span>
      <a href={url} target="_blank">
        {url}
      </a>
    </div>
  )
}

export default DraggableLink;
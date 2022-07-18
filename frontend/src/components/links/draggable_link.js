import React from "react";

const DraggableLink = ({
  title, url, dragStart, dragEnter, dragOver, dragLeave,
  dragging, dragStyles, sectionIdx, linkIdx }) => {

  return (
    <div
      draggable
      onDragStart={e => dragStart(e, { sectionIdx, linkIdx })}
      onDragEnter={dragging ? e => dragEnter(e, { sectionIdx, linkIdx }) : null}
      onDragOver={dragOver}
      onDragLeave={dragLeave}
      className={dragging ?
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
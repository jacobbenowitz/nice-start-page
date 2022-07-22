import React from "react";

const DraggableLink = ({
  title, url, metaData, dragStart, dragEnter, dragOver, dragLeave,
  dragging, dragStyles, sectionIdx, linkIdx }) => {
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
      className={dragging ?
        dragStyles(sectionIdx, linkIdx)
        : "flex flex-col justify-center items-center min-h-40 bg-gray-600 bg-opacity-50 my-2 text-center"
      }>
      <div
        className="flex justify-center items-center w-9 h-9 bg-gray-800
        rounded-md">
        <a href={url} target="_blank"
          className=" bg-gray-400 bg-opacity-30 rounded-full p-1" >
          {icon ? icon : image ? image : title.slice(0,2).toUpperCase()}
        </a>
      </div>
      <span className="text-gray-900 font-medium text-lg">
        {title}
      </span>
    </div>
  )
}

export default DraggableLink;
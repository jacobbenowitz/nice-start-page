import React, {
  useState, useRef
} from "react";

import DraggableLink from "./draggable_link";

const Links = ({ userData }) => {
  const [links, updateLinks] = useState(userData);
  const [dragging, toggleDragging] = useState(false);

  const dragItem = useRef();
  const dragNode = useRef();

  const handleDragStart = (e, params) => {
    console.log('drag start..', params)
    dragItem.current = params;
    dragNode.current = e.target;
    dragNode.current.addEventListener('dragend', handleDragEnd)
    setTimeout(() => {
      toggleDragging(true)
    }, 0)
  }

  const handleDragEnd = () => {
    console.log('end drag..')
    toggleDragging(false)
    dragNode.current.removeEventListener('dragend', handleDragEnd)
    dragItem.current = null;
    dragNode.current = null;
  }

  const handleDragOver = (e, params) => {
    console.log('dragover..', params)
  }

  const dragStyles = (sectionIdx, linkIdx) => {
    const currItem = dragItem.current;
    console.log('dragStyles..', sectionIdx, linkIdx)
    if (currItem.sectionIdx === sectionIdx &&
      currItem.linkIdx === linkIdx
    ) {
      return "flex flex-col justify-center items-center min-h-150 bg-gray-600 my-2 text-center opacity-50"
    }
    return "flex flex-col justify-center items-center min-h-150 bg-gray-50 my-2 text-center"
  }

  return (
    <div className="w-screen mx-9 my-5 flex flex-col">
      <div className="grid grid-cols-autoFill-300 
            w-full h-full max-w-full gap-2 items-start place-content-center">
        {links.map((section, sectionIdx) => (
          <div
            key={`section-${sectionIdx}`}
            className="bg-gray-800 rounded-sm p-2">
            {section.links.map((link, linkIdx) => (
              <DraggableLink
                key={`${section.label}-${linkIdx}`}
                title={link.title}
                url={link.url}
                dragStatus={dragging}
                sectionIdx={sectionIdx}
                linkIdx={linkIdx}
                dragStyles={dragStyles}
                dragStart={handleDragStart}
                dragOver={handleDragOver}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Links;

// export default class Links extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       status: IDLE
//     }
//   }

//   componentDidMount() {
//     if (this.state.status === IDLE) {
//       this.props.fetchUserLinks(this.props.currentUser.id);
//       this.setState({ status: LOADING });
//     }
//   }

//   componentDidUpdate() {
//     const { linksStatus } = this.props;
//     if (this.state.status === LOADING && linksStatus === DONE) {
//       this.setState({
//         status: DONE,
//       });
//     }
//   }

//   render() {
//     const { status } = this.state;
//     const { links } = this.props;
//     let title, linkList;
//     if (status !== DONE) {
//       title = <h2>Loading links...</h2>;
//       linkList = <div className="placeholder">..........</div>;
//     } else {
//       title = <h2>Links</h2>;
//       linkList = links.map(link =>
//         <SingleLink
//           key={link._id}
//           link={link}
//         />
//       );
//     };

//     return (
//       <div className="w-screen mx-9 flex flex-col">
//         {title}
//         <div className="grid grid-cols-autoFill-300 
//             w-full h-full max-w-full gap-2 items-start place-content-center">
//           {sample.map((section, i) => (
//             <div
//               key={`section-${i}`}
//               className="bg-gray-800 rounded-sm p-2">
//               {section.links.map((link, i) => (
//                 <DraggableLink
//                   key={`${section.label}-${i}`}
//                   title={link.title}
//                   url={link.url}
//                 />
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     )
//   }
// }
import React from "react";
import ReactModal from "react-modal";
import "./styles.scss";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "80%",
    MaxHight: "80%",
    backgroundColor: "white",
    minWidth: "450px",
    maxWidth: "800px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.7)",
    // backgroundColor: "##131111",
    // opacity: "0.1",
  },
};
export default function MovieViewModal({ isOpen, RequestClose, movie }) {
  //   ReactModal.setAppElement(".App-header");
  //   console.log(movie);
  return (
    <ReactModal
      tras
      //   className='Modal'
      //   overlayClassName='Overlay'
      isOpen={isOpen}
      onRequestClose={RequestClose}
      ariaHideApp={false}
      style={customStyles}>
      <div id='container'>
        <div id='image'>
          <img src={movie?.image.original} />
        </div>
        <div id='info'>
          <h1>Title:- {movie?.name}</h1>
          <h1>Rating:- {movie?.rating.average}</h1>
          <h1>ReleaseDate:- {movie?.premiered}</h1>
          <h1>synopsis:-</h1>
          <p
            id='synopsis'
            dangerouslySetInnerHTML={{ __html: movie?.summary }}></p>
        </div>
      </div>
    </ReactModal>
  );
}

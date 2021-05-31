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
    backgroundColor: "rgba(0,0,0,0.5)",
    // opacity: "0.6",
  },
};
export default function MovieViewModal({ isOpen, RequestClose, movie }) {
  //   ReactModal.setAppElement(".App-header");
  //   console.log(movie);
  return (
    <ReactModal
      //   className='Modal'
      //   overlayClassName='Overlay'
      isOpen={isOpen}
      onRequestClose={RequestClose}
      ariaHideApp={false}
      style={customStyles}>
      <div id='container'>
        <div id='image'>
          <img src={movie?.imageUrl} />
        </div>
        <div id='info'>
          <h1>Title:- {movie?.title}</h1>
          <h1>Rank:- {movie?.rank}</h1>
          <h1>ReleaseDate:- {movie?.releaseDate}</h1>
          <h1>synopsis:-</h1>
          <p>{movie?.synopsis}</p>
        </div>
      </div>
    </ReactModal>
  );
}

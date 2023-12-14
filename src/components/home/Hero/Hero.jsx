import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import YouTube from 'react-youtube';
import 'bootstrap/dist/css/bootstrap.min.css';
import rsimage from '../../../assets/images/hero/rsimage.png';
import { IoVideocam } from "react-icons/io5";

const Hero = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const videoId = 'qwfE7fSVaZM'; 

    return (
        <div className="container m-auto mt-5 w-100 h-90 d-flex align-items-center justify-content-center">
            <div className="w-100 row d-flex align-items-center justify-content-center">
                {/* Left Section */}
                <div className="col-md-6">
                    <div className="text-left mt-5">
                        <h1>
                            Quick & Reliable <span className="demo_color">Warehousing and Logistics</span> Solutions
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida nibh vel velit auctor aliquet.
                            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.
                        </p>
                        <button className="demo_btn me-5 p-2">Join Now</button>
                        <button className="btn btn-outline-dark p-2" onClick={handleShowModal}>
                        <IoVideocam />   Play Demo
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="col-md-6">
                    <img src={rsimage} alt="Hero " className="img-fluid" />
                </div>
            </div>

            {/* Modal for YouTube Player */}
            <Modal show={showModal} onHide={handleCloseModal} centered style={{width:"480px !impotant"}}>
                <Modal.Header closeButton>
                    <Modal.Title>YouTube Video Demo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <YouTube videoId={videoId} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Hero;

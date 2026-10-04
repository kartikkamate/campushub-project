import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import axios from "axios";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const ViewItem = () => {
  const [items, setItems] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get("https://kartik-7p4a.onrender.com/item");
      setItems(response.data.items);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  // Animation variants for framer-motion
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Container className="view-item-container">
      <h2 className="text-center mb-5 section-title" data-aos="fade-down">
        Our Inventory
      </h2>

      <Row>
        {items.map((item, index) => (
          <Col key={item._id} md={6} lg={4} className="mb-4">
            <motion.div
              className="item-card"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="item-image-container"
                onClick={() =>
                  handleImageClick(item.itemImage)}
              >
                <img
                  src={item.itemImage}
                  alt={item.itemName}
                  className="item-image"
                />
                <div className="image-overlay">
                  <span className="view-text">Click to View</span>
                </div>
              </div>

              <div className="item-details">
                <h3 className="item-name">{item.itemName}</h3>
                <p className="item-description">{item.description}</p>

                <div className="item-meta">
                  <div className="meta-item">
                    <span className="meta-label">Quantity:</span>
                    <span className="meta-value">{item.quantity}</span>
                  </div>

                  <div className="meta-item">
                    <span className="meta-label">Category:</span>
                    <span className="meta-value">
                      {item.category?.name || item.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* Image Modal */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        size="lg"
        className="image-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Item Image</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Full size"
              className="img-fluid modal-image"
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <style>{`
      /* ViewItem.css */
.view-item-container {
  padding: 2rem 0;
  min-height: 100vh;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 3rem;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  border-radius: 2px;
}

.item-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
}

.item-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}

.item-image-container {
  position: relative;
  height: 250px;
  overflow: hidden;
  cursor: pointer;
}

.item-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.item-image-container:hover .item-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.item-image-container:hover .image-overlay {
  opacity: 1;
}

.view-text {
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
}

.item-details {
  padding: 1.5rem;
}

.item-name {
  font-size: 1.4rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.8rem;
}

.item-description {
  color: #7f8c8d;
  margin-bottom: 1.2rem;
  line-height: 1.5;
}

.item-meta {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #f1f2f6;
  padding-top: 1rem;
}

.meta-item {
  display: flex;
  flex-direction: column;
}

.meta-label {
  font-size: 0.8rem;
  color: #95a5a6;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 0.2rem;
}

.meta-value {
  font-size: 1rem;
  color: #2c3e50;
  font-weight: 600;
}

.image-modal .modal-content {
  border-radius: 12px;
  overflow: hidden;
}

.image-modal .modal-header {
  border-bottom: 1px solid #eaeaea;
  background: #f8f9fa;
}

.image-modal .modal-title {
  color: #2c3e50;
  font-weight: 600;
}

.modal-image {
  border-radius: 8px;
  max-height: 70vh;
  object-fit: contain;
}

.image-modal .btn-secondary {
  background: #95a5a6;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1.5rem;
  font-weight: 600;
}

.image-modal .btn-secondary:hover {
  background: #7f8c8d;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .view-item-container {
    padding: 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .item-meta {
    flex-direction: column;
    gap: 0.8rem;
  }
}
      `}</style>
    </Container>
  );
};

export default ViewItem;
import React, { useEffect, useState } from "react";
import {Row, Col, Form, Table, Button, Container} from "react-bootstrap";
import axios from "axios";
import { MdEdit, MdDelete } from "react-icons/md";

const Items = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [itemData, setItemData] = useState({
    itemName: "",
    quantity: "",
    description: "",
    category: "",
    itemImage: null,
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [itemId, setItemId] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get("https://kartik-7p4a.onrender.com/item");
    setItems(response.data.items);
    console.log(response.data);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "itemImage") {
      setItemData({ ...itemData, itemImage: files[0] });
    } else {
      setItemData({ ...itemData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.entries(itemData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      let response;
      if (isEditMode) {
        response = await axios.put(
          `https://kartik-7p4a.onrender.com/item/${itemId}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      } else {
        response = await axios.post("https://kartik-7p4a.onrender.com/item", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      if (response.status === 200 || response.status === 201) {
        fetchItems();
        setItemData({
          itemName: "",
          quantity: "",
          description: "",
          category: "",
          itemImage: null,
        });
        setIsEditMode(false);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleEdit = (item) => {
  setItemData({
    itemName: item.itemName,
    quantity: item.quantity,
    description: item.description,
    category: item.category,
    itemImage: null,
  });

  setItemId(item._id);
  setIsEditMode(true);
};

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Do you really want to delete this item?"
    );
    if (!confirmDelete) return;

    try {
      const res = await axios.delete(`https://kartik-7p4a.onrender.com/item/${id}`);
      setItems(items.filter((item) => item._id !== id));
      alert(res.data.message);
    } catch (error) {
      alert(error.response.data.message);
      console.error("Error deleting item:", error);
    }
  };

  return (
    <Container className="mt-5">
      <h2>{isEditMode ? "Edit Item" : "Add Item"}</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sm={6}>
            <Form.Group>
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                name="itemName"
                value={itemData.itemName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group>
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                value={itemData.quantity}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={itemData.category}
                onChange={handleChange}
                required
                placeholder="Enter category name"
              />
            </Form.Group>
          </Col>

          <Col sm={6}>
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="itemImage"
                onChange={handleChange}
                accept="image/*"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={itemData.description}
            onChange={handleChange}
            rows={3}
          />
        </Form.Group>

        <Button className="mt-3" type="submit">
          {isEditMode ? "Update Item" : "Add Item"}
        </Button>
      </Form>

      <h3 className="mt-5">Item List</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.itemName}</td>
              <td>{item.quantity}</td>
              <td>{item.category}</td>

              <td>
                <img
               src={item.itemImage}
               alt={item.itemName}
               width="50"
               />
              </td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(item)}>
                  <MdEdit />
                </Button>{" "}
                <Button variant="danger" onClick={() => handleDelete(item._id)}>
                  <MdDelete />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Items;
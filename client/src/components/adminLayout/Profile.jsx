import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const API_URL = "https://kartik-7p4a.onrender.com/api/users/profile";

  const getProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProfile(response.data.user);
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Unable to load profile. Please log in again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const token = localStorage.getItem("token");

      const response = await axios.put(
        API_URL,
        {
          name: profile.name,
          contact: profile.contact,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setProfile(response.data.user);
      setMessage("Profile updated successfully!");
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Failed to update profile."
      );
    }
  };

  if (loading) return <p>Loading profile...</p>;

  return (
    <div className="container py-5" style={{ maxWidth: "650px" }}>
      <h2 className="mb-4">My Profile</h2>

      {message && (
        <div className="alert alert-info">{message}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={profile.name || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            value={profile.email || ""}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contact Number</label>
          <input
            type="text"
            name="contact"
            className="form-control"
            value={profile.contact || ""}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
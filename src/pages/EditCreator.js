// EditCreator.js

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../client";
import Spinner from "../components/Spinner";
import { toast } from "react-hot-toast";
const EditCreator = ({ onEditCreator }) => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [url, setURL] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        const { data, error } = await supabase
          .from("creators")
          .select()
          .eq("id", id)
          .single();

        if (error) {
          throw new Error(error.message);
        }

        const { name, url, description, imageURL } = data;
        setName(name);
        setURL(url);
        setDescription(description);
        setImageURL(imageURL);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching content creator:", error);
      }
    };

    fetchCreator();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  const handleUpdateCreator = async () => {
    try {
      const { error } = await supabase
        .from("creators")
        .update({
          name,
          url,
          description,
          imageURL,
        })
        .eq("id", id);

      if (error) {
        throw new Error(error.message);
      }

      console.log("Content creator updated successfully");
      toast.success("Creator updated");
      onEditCreator();
      // Redirect to view creator page
      navigate(`/viewCreator/${id}`);
    } catch (error) {
      console.error("Error updating content creator:", error);
    }
  };
  const handleDeleteCreator = async () => {
    try {
      const { error } = await supabase.from("creators").delete().eq("id", id);

      if (error) {
        throw new Error(error.message);
      }

      console.log("Content creator deleted successfully");
      toast.error("Creator deleted");
      onEditCreator();
      // Redirect to home page
      navigate("/");
    } catch (error) {
      console.error("Error deleting content creator:", error);
    }
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="container mx-auto px-4 py-8 flex-col items-center text-white ">
      <div>
        <h2 className="text-2xl text-center font-bold mb-4">
          Edit Content Creator
        </h2>
      </div>

      <div className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Name:</label>
          <input
            className="w-full text-black p-2 border border-gray-300 rounded"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">URL:</label>
          <input
            className="w-full p-2 text-black border border-gray-300 rounded"
            type="text"
            value={url}
            onChange={(e) => setURL(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Description:</label>
          <textarea
            className="w-full text-black p-2 border border-gray-300 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Image URL:</label>
          <input
            className="w-full text-black p-2 border border-gray-300 rounded"
            type="text"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>

        <div className="flex justify-between">
          <button
            className="px-4 py-2 mt-4 text-white bg-red-500 hover:bg-red-600 rounded"
            onClick={handleDeleteCreator}
          >
            Delete
          </button>

          <button
            className="px-4 py-2 mt-4 text-white bg-blue-500 hover:bg-blue-600 rounded"
            onClick={handleUpdateCreator}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCreator;

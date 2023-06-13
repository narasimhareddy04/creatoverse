import React, { useState } from "react";
import { supabase } from "../client";
import { toast } from "react-hot-toast";
const AddCreator = ({ onAddCreator }) => {
  const [name, setName] = useState("");
  const [url, setURL] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from("creators")
        .insert([{ name, url, description, imageURL }]);

      if (error) {
        throw new Error(error.message);
      }

      console.log("Content creator added successfully:", data);
      toast.success("Creator added successfully!");

      // Reset form fields
      setName("");
      setURL("");
      setDescription("");
      setImageURL("");
      const newCreator = {
        name,
        url,
        description,
        imageURL,
      };
      onAddCreator();
    } catch (error) {
      console.error("Error adding content creator:", error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-md w-full p-6 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold">Add Content Creator</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-semibold">Name:</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">URL:</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              value={url}
              onChange={(e) => setURL(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Description:</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Image URL:</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
            />
          </div>
          <button
            className="w-full py-2 mt-4 text-white bg-blue-500 hover:bg-blue-600 rounded"
            type="submit"
          >
            Add Creator
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCreator;

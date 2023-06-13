import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaInfo, FaYoutube } from "react-icons/fa";
const ContentCreator = ({ key, creatorDetails }) => {
  console.log(creatorDetails);
  return (
    <div className="bg-white mb-5 flex flex-col justify-center rounded-md w-96">
      <div>
        <img className="w-full h-1/6" src={creatorDetails.imageURL} />
      </div>

      <div className="p-8">
        <div className="mt-2 flex justify-start item-center">
          <Link
            className="self-center"
            to={`/viewCreator/${creatorDetails.id}`}
          >
            <FaInfo />
          </Link>
          <h1 className="text-xl font-bold">{creatorDetails.name}</h1>
        </div>

        <p className="mt-2">{creatorDetails.description}</p>
        <div className="flex justify-between">
          <a className="mt-2" href={creatorDetails.url} target="_blank">
            <FaYoutube />
          </a>
          <Link to={`/editCreator/${creatorDetails.id}`} className="mt-2">
            <FaEdit />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentCreator;

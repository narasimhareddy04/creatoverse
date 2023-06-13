import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import ContentCreator from "../components/ContentCreator";
const ShowCreators = ({ creators }) => {
  return (
    <div>
      {creators.length > 0 ? (
        creators.map((eachCreator) => (
          <>
            <ContentCreator key={eachCreator.id} creatorDetails={eachCreator} />
          </>
        ))
      ) : (
        <div className="text-white text-3xl">No Content creators found</div>
      )}
    </div>
  );
};

export default ShowCreators;

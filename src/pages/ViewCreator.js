import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import ContentCreator from "../components/ContentCreator";
import { supabase } from "../client";
import { FaInfo, FaYoutube } from "react-icons/fa";
const ViewCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  //   const location = useLocation();

  //   const thePath = location.pathname;
  //   const lastItem = thePath.substring(thePath.lastIndexOf("/") + 1);
  const eid = BigInt(id);
  const [loading, setLoading] = useState(false);
  const [creator, setCreator] = useState([]);
  async function fetchCreatorData() {
    setLoading(true);
    try {
      const { data } = await supabase.from("creators").select().eq("id", eid);
      setCreator(data);
    } catch (error) {
      console.log("Error occurred");
      setCreator([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchCreatorData();
  }, []);
  //   const handleDeleteCreator = async () => {
  //     try {
  //       const { error } = await supabase.from("creators").delete().eq("id", id);

  //       if (error) {
  //         throw new Error(error.message);
  //       }

  //       console.log("Content creator deleted successfully");
  //       //   onEditCreator();
  //       // Redirect to home page
  //       navigate("/");
  //     } catch (error) {
  //       console.error("Error deleting content creator:", error);
  //     }
  //   };
  return (
    <div className="text-white text-xl flex justify-center items-center">
      {creator.map((each) => (
        <div className="flex flex-col items-center">
          <div className="flex w-3/4 justify-between">
            <div className="w-4/5 p-2 flex flex-col justify-center items-center bg-white rounded-md text-black">
              <h1 className="text-xl font-bold mb-2">{each.name}</h1>
              <p className="mb-2">{each.description}</p>
              <a className="mt-2" href={each.url} target="_blank">
                <FaYoutube />
              </a>
            </div>
            <div className="w-2/5">
              <img className="w-full" src={each.imageURL} />
            </div>
          </div>
          <div className=" mt-5 w-1/5 flex justify-center">
            <Link to={`/editCreator/${id}`}>
              <div className="p-3 w-20 text-center rounded-md bg-blue-600 text-white">
                <button>Edit</button>
              </div>
            </Link>

            {/* <div className="p-3 w-20 text-center rounded-md bg-red-600 text-white">
              <button onClick={handleDeleteCreator}>Delete</button>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewCreator;

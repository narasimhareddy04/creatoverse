import { Route, Routes, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ShowCreators from "./pages/ShowCreators";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import ViewCreator from "./pages/ViewCreator";
import Spinner from "./components/Spinner";
import { supabase } from "./client";
import ContentCreator from "./components/ContentCreator";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [creators, setCreators] = useState([]);
  async function fetchCreatorsData() {
    setLoading(true);
    try {
      const { data } = await supabase.from("creators").select();
      setCreators(data);
    } catch (error) {
      console.log("Error occurred");
      setCreators([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchCreatorsData();
  }, []);
  const showCreators = () => {
    <Link to={"/"} />;
  };
  const addCreator = () => {
    <Link to={"/addCreator"} />;
  };
  const handleAddCreator = () => {
    fetchCreatorsData();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <div className="h-24  bg-gradient-to-r from-purple-500 to-pink-500 mb-5  flex justify-evenly items-center">
        <Link to={"/"}>
          <button
            className="bg-black rounded-md p-4 text-white hover:bg-blue-500 text-white  p-4 rounded scale-110 transition duration-300 ease-in"
            onClick={showCreators}
          >
            Show Creators
          </button>
        </Link>
        <Link to={"/addCreator"}>
          <button
            className="bg-black rounded-md p-4 text-white hover:bg-blue-500 text-white  p-4 rounded scale-110 transition duration-300 ease-in"
            onClick={addCreator}
          >
            Add Creator
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <Routes>
          <Route
            exact
            path="/"
            element={<ShowCreators creators={creators} />}
          />

          <Route
            exact
            path="/addCreator"
            element={<AddCreator onAddCreator={handleAddCreator} />}
          />
          <Route
            exact
            path="/editCreator/:id"
            element={<EditCreator onEditCreator={fetchCreatorsData} />}
          />
          <Route exact path="/viewCreator/:id" element={<ViewCreator />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

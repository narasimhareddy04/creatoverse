// import { supabase } from "../src/client";
import { createClient } from "@supabase/supabase-js";

export const URL = "https://wtcmmmjclwfzfemfpebj.supabase.co";

export const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0Y21tbWpjbHdmemZlbWZwZWJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMzQ2NjgsImV4cCI6MjAwMTkxMDY2OH0.8QAqd6tl1XszoxRq_Fg2RJZX1Yr8TIinuhyoJOGCrUg";
export const supabase = createClient(URL, API_KEY);
const express = require("express");

const app = express();

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
// Middleware
app.use(express.json());

// Define the /api/creators endpoint
app.get("/api/creators", async (req, res) => {
  try {
    const { data, error } = await supabase.from("creators").select();

    if (error) {
      throw new Error(error.message);
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching creators data" });
  }
});

// Start the server
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

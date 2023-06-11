import { createClient } from "@supabase/supabase-js";
const URL = "https://wtcmmmjclwfzfemfpebj.supabase.co";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0Y21tbWpjbHdmemZlbWZwZWJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMzQ2NjgsImV4cCI6MjAwMTkxMDY2OH0.8QAqd6tl1XszoxRq_Fg2RJZX1Yr8TIinuhyoJOGCrUg";
export const supabase = createClient(URL, API_KEY);

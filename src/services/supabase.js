import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jzampjjgnpadxhscexrm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6YW1wampnbnBhZHhoc2NleHJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ2MjIwMTQsImV4cCI6MjAxMDE5ODAxNH0.glXx-1UtzLeAvwbkYW64q3TuiHNkh9AsxghBD-GrWxY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

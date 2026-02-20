import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

function App() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchProfiles();
  }, []);

  async function fetchProfiles() {
    const { data, error } = await supabase
      .from("profiles")
      .select("*");

    if (error) {
      console.error(error);
    } else {
      setProfiles(data);
    }
  }

  return (
    <div>
      <h1>Profiles</h1>
      {profiles.map((profile) => (
        <p key={profile.id}>{profile.username}</p>
      ))}
    </div>
  );
}

export default App;
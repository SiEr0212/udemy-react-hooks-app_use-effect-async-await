import { useState, useEffect } from "react";
import "./App.css";

const initProfile = {
  followers: null,
  publicRepos: null,
};

function App() {
  const [profile, setProfile] = useState(initProfile);

  const getProfile = async () => {
    const response = await fetch("https://api.github.com/users/SiEr0212");
    const json = await response.json();

    setProfile({
      followers: json.followers,
      publicRepos: json.public_repos

    })

    console.log(initProfile)
    
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Fetch Data</h2>
        <h3>{}</h3>
      </header>
    </div>
  );
}

export default App;

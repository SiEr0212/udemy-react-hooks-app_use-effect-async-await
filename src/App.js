import { useState, useEffect } from "react";
import "./App.css";

const initProfile = {
  login:'',
  followers: null,
  publicRepos: null,
};

function App() {
  const [profile, setProfile] = useState(initProfile);

  const getProfile = async () => {
    const response = await fetch("https://api.github.com/users/SiEr0212");
    const json = await response.json();

    setProfile({
      login: json.login,
      followers: json.followers,
      publicRepos: json.public_repos,
      avatar: json.avatar_url


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
        <h3>{profile.login}</h3>
        <img  clasName="profilePic" src={profile.avatar} style={{borderRadius:50 + "%"}}/>
        <h3>{`followers: ${profile.followers}, repos: ${profile.publicRepos}`}</h3>
      </header>
    </div>
  );
}

export default App;

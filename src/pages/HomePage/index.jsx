import { useState, useEffect } from "react";
import "./style.css";
import { Joke } from "../../Components/Joke/Joke";

export const HomePage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      const response = await fetch("http://localhost:4000/api/jokes");
      const json = await response.json();
      console.log(json.data);
      setJokes(json.data);
    };

    fetchJokes();
  }, []);

  return (
    <div className="container">
      {jokes.map((joke) => (
        <Joke
          key={joke.id}
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </div>
  );
};

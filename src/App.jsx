import { useState } from "react";
import "./App.css";
import Joke from "./Joke";
import JokeForm from "./JokeForm";
function App() {
  const [jokes, setJokes] = useState([
    {
      id: 1,
      text: "I'm afraid for the calender, It's days are numbered.",
      likes: 0,
    },
    {
      id: 2,
      text: "I used to be addicted to shop, but I'm clean now.",
      likes: 0,
    },
  ]);

  const handleNewJoke = (text) => {
    const joke = {
      text,
      id: self.crypto.randomUUID(),
      likes: 0,
    };
    if (text != "") {
      setJokes([joke, ...jokes]);
    }
    console.log(`Joke: ${text}`);
  };
  const handleDeleteJoke = (id) => {
    setJokes(jokes.filter((joke) => joke.id != id));
    console.log("Joke id:", id);
  };
  const handleLike = (id) => {
    setJokes(
      jokes.map((joke) => {
        if (joke.id === id) {
          return { ...joke, likes: joke.likes + 1 };
        } else {
          return joke;
        }
      })
    );
  };
  const handleDislike = (id) => {
    setJokes(
      jokes.map((joke) => {
        if (joke.id === id) {
          return { ...joke, likes: joke.likes - 1 };
        } else {
          return joke;
        }
      })
    );
  };
  const handleSort = () => {
    setJokes([...jokes].sort((a, b) => b.likes - a.likes));
  };
  return (
    <div className="App">
      <button onClick={handleSort}>Sort</button>
      <JokeForm onNewJoke={handleNewJoke}></JokeForm>
      {jokes.map((joke) => (
        <Joke
          onDelete={handleDeleteJoke}
          key={joke.id}
          onLike={handleLike}
          onDislike={handleDislike}
          {...joke}
        ></Joke>
      ))}
    </div>
  );
}

export default App;

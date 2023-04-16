import { useReducer } from "react";
import "./App.css";
import Joke from "./Joke";
import JokeForm from "./JokeForm";

function jokesReducer(jokes, action) {
  switch (action.type) {
    case "added_joke":
      return [action.joke, ...jokes];
    case "deleted_joke":
      return jokes.filter((joke) => joke.id != action.id);
    case "liked_joke":
      return jokes.map((joke) => {
        if (joke.id === action.id) {
          return { ...joke, likes: joke.likes + 1 };
        } else {
          return joke;
        }
      });
    case "disliked_joke":
      return jokes.map((joke) => {
        if (joke.id === action.id) {
          return { ...joke, likes: joke.likes - 1 };
        } else {
          return joke;
        }
      });
    case "sorted_joke":
      return [...jokes].sort((a, b) => b.likes - a.likes);
  }
}

function App() {
  const [jokes, dispatch] = useReducer(jokesReducer, [
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
      dispatch({ type: "added_joke", joke });
    }
  };
  const handleDeleteJoke = (id) => {
    dispatch({ type: "deleted_joke", id });
  };
  const handleLike = (id) => {
    dispatch({ type: "liked_joke", id });
  };
  const handleDislike = (id) => {
    dispatch({ type: "disliked_joke", id });
  };
  const handleSort = () => {
    dispatch({ type: "sorted_joke" });
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

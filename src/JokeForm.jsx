import { useState } from "react";

export default function JokeForm({ onNewJoke }) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onNewJoke(text);
    setText("");
  };
  return (
    <>
      <h3>Add New Joke</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="write a joke"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

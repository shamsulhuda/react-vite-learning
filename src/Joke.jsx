export default function Joke({ id, text, onDelete, likes, onLike, onDislike }) {
  const handleLike = () => {
    onLike(id);
  };
  const handleDislike = () => {
    onDislike(id);
  };

  return (
    <div>
      <p>{text}</p>
      <p>Like: {likes}</p>
      <button onClick={handleLike}>👍</button>
      <button onClick={handleDislike}>👎</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

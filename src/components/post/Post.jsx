import "./post.css";

export const Post = ({ title, body, userId, users }) => {
  return (
    <div className='post'>
      <h2>{title}</h2>
      <p>{body}</p>
      {Object.keys(users).length !== 0 && <p>user: {users[userId].name}</p>}
    </div>
  );
};

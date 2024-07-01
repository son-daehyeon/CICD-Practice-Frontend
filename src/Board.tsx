import React from 'react';

interface Post {
  title: string;
  description: string;
}

interface BoardProps {
  posts: Post[];
}

const Board: React.FC<BoardProps> = ({ posts }) => {
  return (
    <div className="board">
      {posts.map((post, index) => (
        <div key={index} className="post">
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Board;

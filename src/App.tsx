import React, { useEffect, useState } from 'react';
import axios from 'axios';

import BoardForm from './BoardForm';
import Board from './Board';
import './styles.css';

interface Post {
  title: string;
  description: string;
}

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await axios.post('/api/board');
    setPosts(response.data);
  };

  const addPost = async (title: string, description: string) => {
    await axios.put('/api/board', { title, description });
    await fetchPosts();
  };

  return (
    <div className="app">
      <h1>익명 게시판</h1>
      <BoardForm addPost={addPost} />
      <Board posts={posts} />
    </div>
  );
};

export default App;

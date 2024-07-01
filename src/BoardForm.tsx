import React, { useState } from 'react';

interface BoardFormProps {
  addPost: (title: string, description: string) => void;
}

const BoardForm: React.FC<BoardFormProps> = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addPost(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="board-form">
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="내용"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default BoardForm;

import React from 'react';
import { FaRegComment } from 'react-icons/fa';

const Comment = () => {
  return (
    <button className="btn d-flex  align-items-center gap-1 text-sm ">
      <FaRegComment className="text-1g" />
      <span>103</span>
    </button>
  );
};

export default Comment;
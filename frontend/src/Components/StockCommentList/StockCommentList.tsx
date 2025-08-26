import React from "react";
import StockCommentListItem from "../StockCommentListItem/StockCommentListItem";
import type { CommentGet } from "../../Model/Comment";

type Props = {
  comments: CommentGet[];
};

const StockCommentList = ({ comments }: Props) => {
  // comments undefined veya null olabilir, kontrol et
  if (!comments || !Array.isArray(comments)) {
    return (
      <div className="p-4">
        <p>No comments available.</p>
      </div>
    );
  }

  // comments boş bir dizi olabilir
  if (comments.length === 0) {
    return (
      <div className="p-4">
        <p>No comments yet.</p>
      </div>
    );
  }

  return (
    <>
      {comments.map((comment) => (
        <StockCommentListItem  comment={comment} />
      ))}
    </>
  );
};

export default StockCommentList;
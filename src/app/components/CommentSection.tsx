// "use client";
// import { useState, FC } from "react";

// interface CommentSectionProps {
//   postId: string;
// }

// const CommentSection: FC<CommentSectionProps> = ({ postId }) => {
//   const [comments, setComments] = useState<string[]>([]);
//   const [comment, setComment] = useState<string>("");

//   const handleAddComment = () => {
//     if (comment.trim()) {
//       setComments([...comments, comment]);
//       setComment("");
//     }
//   };

//   return (
//     <div className="mt-8">
//       <h3 className="text-xl font-semibold text-gray-800 mb-4">Comments</h3>
//       <ul className="space-y-4">
//         {comments.map((c, idx) => (
//           <li
//             key={idx}
//             className="border rounded-md p-3 bg-gray-100 text-gray-800 shadow-sm"
//           >
//             {c}
//           </li>
//         ))}
//       </ul>
//       <div className="mt-6">
//         <textarea
//           className="w-full border rounded-md p-3 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           placeholder="Write your comment..."
//           rows={3}
//         />
//         <button
//           className="mt-3 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors shadow-md"
//           onClick={handleAddComment}
//         >
//           Add Comment
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CommentSection;

"use client";
import { useState, FC } from "react";

interface CommentSectionProps {
  postId: string;
}

const CommentSection: FC<CommentSectionProps> = ({ postId }) => {
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleAddComment = () => {
    if (!comment.trim()) {
      setError("Comment cannot be empty!");
      return;
    }
    if (comment.length > 200) {
      setError("Comment must be less than 200 characters.");
      return;
    }
    setComments([...comments, comment]);
    setComment("");
    setError("");
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Comments</h3>
      <ul className="space-y-4">
        {comments.length > 0 ? (
          comments.map((c, idx) => (
            <li
              key={idx}
              className="border rounded-md p-3 bg-gray-100 text-gray-800 shadow-sm"
            >
              {c}
            </li>
          ))
        ) : (
          <p className="text-gray-600">No comments yet. Be the first to comment!</p>
        )}
      </ul>
      <div className="mt-6">
        <textarea
          className="w-full border rounded-md p-3 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment..."
          rows={3}
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <button
          className="mt-3 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors shadow-md disabled:opacity-50"
          onClick={handleAddComment}
          disabled={!comment.trim()}
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default CommentSection;

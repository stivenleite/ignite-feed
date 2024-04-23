import { Trash2, ThumbsUp } from "lucide-react";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return (
    <div className="flex items-start gap-4 text-sm">
      <Avatar hasBorder={false} src="https://github.com/stivenleite.png" />
      <div className="flex-1">
        <div className="bg-gray3 rounded-lg p-4 flex flex-col gap-4 mb-4">
          <header className="flex justify-between items-start">
            <div>
              <div className="flex gap-2">
                <strong className="text-gray7">Stiven Leite</strong>
                <strong className="text-gray5">(You)</strong>
              </div>
              <time className="text-xs text-gray5">2h ago</time>
            </div>
            <button
              title="Delete"
              type="button"
              className="text-gray5 hover:text-red-danger"
            >
              <Trash2 size={20} onClick={handleDeleteComment} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button
            type="button"
            className="flex items-center text-gray5 hover:text-gray7"
            onClick={handleLikeComment}
          >
            <ThumbsUp size={20} className="mr-2 mt-[-4px]" />
            <strong>Like • {likeCount}</strong>
          </button>
        </footer>
      </div>
    </div>
  );
}

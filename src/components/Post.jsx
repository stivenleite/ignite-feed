import { format, formatDistanceToNow} from "date-fns"

import { useState } from "react";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { comment } from "postcss";

export function Post({ author, content, publishedAt }) {
  const [writingComment, setWritingComment] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const publishedDateFormatted = format(publishedAt, "MMMM do',' uuuu")
  const publishedDateToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true
  })

  function handleNewComment() {
    setNewComment(event.target.value)

    if (event.target.value != "") {
      setWritingComment(true);
    } else {
      setWritingComment(false);
    }
  }

  function handlePostComment() {
    event.preventDefault()
    
    setComments([...comments, newComment])
    setNewComment('')
  }

  

  return (
    <article className="p-10 bg-gray2 rounded-lg">
      <header className="flex justify-between items-center">
        <div className="flex gap-4">
          <Avatar hasBorder src={author.avatarUrl} />
          <div className="flex flex-col justify-center">
            <strong className="text-gray7">{author.name}</strong>
            <span className="text-sm text-gray5">{author.role}</span>
          </div>
        </div>
        <time className="text-sm text-gray5" title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateToNow}
        </time>
      </header>
      <div className="flex flex-col gap-4 my-6">
        {
          content.map(line => {
            if (line.type == "paragraph") {
               return <p>{line.value}</p>
            } else if (line.type == "link") {
              return (
                <p className="text-green-light font-bold flex gap-2 ">
                <span>👉</span>
                <a href="" className="hover:text-green-dark">
                  {line.value}
                </a>
                </p>
              )
            } else if (line.type == "hashtags") {
              return (
                <p className="text-green-light font-bold flex gap-2">
                  {line.value.map(hashtag => {
                    return <a href="" className="hover:text-green-dark">{hashtag}</a>
                  })}
                </p>
              )
            }
          })
        }
      </div>
      <form 
        onSubmit={handlePostComment}
        className="flex flex-col gap-4 pt-6 border-t-[1px] border-gray3"
      >
        <strong className="text-gray7">Leave your feedback</strong>
        <textarea
          onChange={handleNewComment}
          placeholder="Write a comment..."
          value={newComment}
          className="bg-gray1 placeholder:text-gray4 rounded-lg p-4 h-24 resize-none"
        />
        {writingComment && (
          <button
            type="submit"
            className="h-12 px-6 bg-green-dark text-white rounded-lg font-bold hover:bg-green-light transition-all duration-100"
          >
            Post
          </button>
        )}
      </form>
      <div className="flex flex-col gap-6 mt-8">
        {
          comments.map(comment => {
            return (
              <Comment content={comment}/>
            )
          })
        }
      </div>
    </article>
  );
}

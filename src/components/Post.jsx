import { useState } from "react";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post() {
  const [writingComment, setWritingComment] = useState(false);

  function checkTextarea(value) {
    if (value != "") {
      setWritingComment(true);
    } else {
      setWritingComment(false);
    }
  }

  return (
    <article className="p-10 bg-gray2 rounded-lg">
      <header className="flex justify-between items-center">
        <div className="flex gap-4">
          <Avatar hasBorder src="https://github.com/stivenleite.png" />
          <div className="flex flex-col justify-center">
            <strong className="text-gray7">Stiven Leite</strong>
            <span className="text-sm text-gray5">Web Developer</span>
          </div>
        </div>
        <time className="text-sm text-gray5" title="">
          1h ago
        </time>
      </header>
      <div className="flex flex-col gap-4 my-6">
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p className="text-green-light font-bold flex gap-2 ">
          <span>👉</span>
          <a href="" className="hover:text-green-dark">
            jane.design/doctorcare
          </a>
        </p>
        <p className="text-green-light font-bold flex gap-2">
          <a href="" className="hover:text-green-dark">
            #novoprojeto
          </a>
          <a href="" className="hover:text-green-dark">
            #nlw
          </a>
          <a href="" className="hover:text-green-dark">
            #rocketseat
          </a>
        </p>
      </div>
      <form className="flex flex-col gap-4 pt-6 border-t-[1px] border-gray3">
        <strong className="text-gray7">Leave your feedback</strong>
        <textarea
          onChange={(e) => checkTextarea(e.target.value)}
          placeholder="Write a comment..."
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
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}

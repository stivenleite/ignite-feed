import { useState } from "react"

export function Post() {
  const [writingComment, setWritingComment] = useState(false)

  function checkTextarea (value) {
    if (value != '') {
      setWritingComment(true)
    } else {
      setWritingComment(false)
    }
  }

  return (
    <article className="p-10 bg-neutral-800 rounded-lg">
      <header className="flex justify-between items-center">
        <div className="flex gap-4">
          <img
            className="w-14 border-4 rounded-lg border-neutral-800 outline outline-2 outline-emerald-600"
            src="https://github.com/stivenleite.png"
            alt="Profile picture"
          />
          <div className="flex flex-col justify-center">
            <strong>Stiven Leite</strong>
            <span className="text-sm text-neutral-500">Web Developer</span>
          </div>
        </div>
        <time className="text-sm text-neutral-500" title="">1h ago</time>
      </header>
      <div className="flex flex-col gap-4 my-6">
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p className="text-emerald-600 font-bold flex gap-2 ">
          <span>👉</span>
          <a href="" className="hover:text-emerald-400">jane.design/doctorcare</a>
        </p>
        <p className="text-emerald-600 font-bold flex gap-2">
          <a href="" className="hover:text-emerald-400">#novoprojeto</a>
          <a href="" className="hover:text-emerald-400">#nlw</a>
          <a href="" className="hover:text-emerald-400">#rocketseat</a>
        </p>
      </div>
      <form className="flex flex-col gap-4 pt-6 border-t-[1px] border-neutral-700">
        <strong>Leave your feedback</strong>
        <textarea onChange={e => checkTextarea(e.target.value)} placeholder="Write a comment..." className="bg-neutral-900 text-neutral-300 rounded-lg p-4 h-24 resize-none" />
        {
          writingComment &&
          <button type="submit" className="h-12 px-6 bg-emerald-700 rounded-lg font-bold hover:bg-emerald-600 transition-all duration-100">Post</button>
        }
      </form>
    </article>
  )
}

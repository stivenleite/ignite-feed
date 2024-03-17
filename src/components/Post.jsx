export function Post({ author, content }) {
  return (
    <div>
      <header>
        <div className="flex items-center gap-4">
          <img
            className="w-14 border-4 rounded-lg border-gray-800 outline outline-2 outline-emerald-600"
            src="https://github.com/stivenleite.png"
            alt="Profile picture"
          />
          <div>
            <strong>Stiven Leite</strong>
            <span className="text-sm text-gray-500 mb-6">Web Developer</span>
          </div>
        </div>
        <time>1h ago</time>
      </header>
    </div>
  )
}

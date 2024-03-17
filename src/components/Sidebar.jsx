import { SquarePen } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="rounded-lg bg-gray-800 overflow-hidden">
      <img
        className="h-[4.5rem] w-full object-cover"
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="flex flex-col items-center mt-[-2rem]">
        <img
          className="w-14 border-4 rounded-lg border-gray-800 outline outline-2 outline-emerald-600"
          src="https://github.com/stivenleite.png"
          alt="Profile picture"
        />
        <strong className="mt-4">Stiven Leite</strong>
        <span className="text-sm text-gray-500 mb-6">Web Developer</span>
        <footer className="w-full border-t-[1px] border-gray-700 flex items-center justify-center py-8">
          <button
            className="w-48 h-12 border-2 rounded-lg border-emerald-600 text-emerald-600 flex items-center justify-center gap-2 hover:bg-emerald-600 hover:text-gray-300 transition-all duration-100"
            type="button"
          >
            <SquarePen />
            <strong>Edit profile</strong>
          </button>
        </footer>
      </div>
    </aside>
  )
}

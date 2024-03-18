import { SquarePen } from 'lucide-react'
import { Avatar } from "./Avatar"

export function Sidebar() {
  return (
    <aside className="rounded-lg bg-gray2 overflow-hidden">
      <img
        className="h-[4.5rem] w-full object-cover"
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="flex flex-col items-center mt-[-2rem]">
        <Avatar
          hasBorder 
          src="https://github.com/stivenleite.png"
        />
        <strong className="mt-4 text-gray7">Stiven Leite</strong>
        <span className="text-sm text-gray5 mb-6">Web Developer</span>
        <footer className="w-full border-t-[1px] border-gray3 flex items-center justify-center py-8">
          <button
            className="w-48 h-12 border-2 rounded-lg border-green-light text-green-light flex items-center justify-center gap-2 hover:bg-green-light hover:text-white transition-all duration-100"
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

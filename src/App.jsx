import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />
      <div className="max-w-5xl mx-auto my-8 px-4 grid md:grid-cols-[256px_1fr] grid-cols-1 items-start gap-8">
        <Sidebar />
        <div className="flex flex-col gap-8">
          <Post />
          <Post />
        </div>
      </div>
    </div>
  )
}

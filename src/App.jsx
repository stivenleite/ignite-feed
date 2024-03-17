import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />
      <div className="max-w-5xl mx-auto my-8 px-4 grid grid-cols-[256px_1fr] items-start gap-8">
        <Sidebar />
        <div>
          <Post />
        </div>
      </div>
    </div>
  )
}

import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/stivenleite.png",
      name: "Stiven Leite",
      role: "Web Developer"
    },
    content: [
      {type: "paragraph", value: "Fala galeraa 👋"},
      {type: "paragraph", value: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", value: "jane.design/doctorcare"},
      {type: "hashtags", value: ["#novoprojeto", "#nlw", "#rocketseat"]}
    ],
    publishedAt: new Date("2024-03-25 20:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content: [
      {type: "paragraph", value: "Fala galeraa 👋"},
      {type: "paragraph", value: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", value: "jane.design/doctorcare"},
      {type: "hashtags", value: ["#novoprojeto", "#nlw", "#rocketseat"]}
    ],
    publishedAt: new Date("2024-03-25 20:00:00")
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className="max-w-5xl mx-auto my-8 px-4 grid md:grid-cols-[256px_1fr] grid-cols-1 items-start gap-8">
        <Sidebar />
        <div className="flex flex-col gap-8">
          {posts.map(post => {
            return(
              <Post
                key={post.id} 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

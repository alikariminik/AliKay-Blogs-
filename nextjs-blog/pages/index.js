import Head from 'next/head';
import 'tailwindcss/tailwind.css'
import { PostCard, Categories, PostWidget, Header } from '../components';

const posts = [
  {title: 'React Testing;', excerpt: 'Learn React Testing'},
  {title: 'React with Tailwind', excerpt: 'Learn React with Tailwind'},
]

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>ARKN Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1 text-rose-700">
            {posts.map((post, index) => 
              <PostCard post={post} key={post.title} />
            )},
        </div>
        <div className="lg:col-span-4 col-span-1 text-rose-700	">
              <div className="lg:sticky relativ top-8">
                <PostWidget />
                <Categories />
              </div>
        </div>
      </div>
    </div>
  )
}
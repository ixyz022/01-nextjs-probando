import { LikeButton } from './likeButton'

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return await response.json()
}

export async function ListOfPosts () {
  const posts = await fetchPosts()

  return (
    posts.slice(0, 5).map(post => (
      <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <LikeButton id={post.id} />
      </article>
    ))
  )
}

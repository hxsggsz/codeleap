import { Posts } from "../components/posts/posts"
import { Header } from "../components/header/header"
import { NewPost } from "../components/new-post/new-post"
import { StyledPosts } from "../styles/mainScreen"
import { useGetAllPosts } from "../actions/getAllPosts"

export const MainScreen = () => {
  const { data } = useGetAllPosts()
  return (
    <>
      <Header />
      <StyledPosts>
        <NewPost />
        {data?.results.map(post => (
        <Posts key={post.id} title={post.title} content={post.content} username={post.username} created_datetime={post.created_datetime} />
        ))}
      </StyledPosts>
    </>
  )
}
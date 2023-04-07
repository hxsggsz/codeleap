import { Posts } from "../components/posts/posts"
import { Header } from "../components/header/header"
import { NewPost } from "../components/new-post/new-post"
import { StyledPosts } from "../styles/mainScreen"

export const MainScreen = () => {
  return (
    <>
      <Header />
      <StyledPosts>
        <NewPost />
        <Posts />
      </StyledPosts>
    </>
  )
}
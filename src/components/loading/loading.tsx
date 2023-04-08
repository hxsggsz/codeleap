import { StyledLoading } from "."
import ReactLoading from "react-loading"

export const LoadingMore = () => {
  return (
    <StyledLoading>
      <ReactLoading className="spin" type="spin" color="gray" height={'3%'} width={'3%'} />
    </StyledLoading>
  )
}
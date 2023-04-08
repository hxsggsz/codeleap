import {Stack, Skeleton} from "@mui/material"
import { StyledLoading } from "."

export const Loading = () => {
  return (
    <StyledLoading>
      <Skeleton className="skeleton" variant="rectangular" width={752} height={318}/>
      <Skeleton className="skeleton" variant="rectangular" width={752} height={318}/>
      <Skeleton className="skeleton" variant="rectangular" width={752} height={318}/>
      <Skeleton className="skeleton" variant="rectangular" width={752} height={318}/>
      <Skeleton className="skeleton" variant="rectangular" width={752} height={318}/>
    </StyledLoading>
  )
}
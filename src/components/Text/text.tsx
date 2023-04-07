import { ReactNode } from "react"
import { StyledText } from "."

type TextTypes = {
  //typescript will infer the string type correctly
  size?: "sm" | "lg" | undefined
  children: ReactNode
}

export const Text = ({size, children}: TextTypes) => {
  return (
    <StyledText size={size} >
      {children}
    </StyledText>
  )
}
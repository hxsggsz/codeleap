import { StyledText } from "."
import { HTMLAttributes, ReactNode } from "react"

interface IText extends HTMLAttributes<HTMLHeadingElement> {
  //typescript will infer the string type correctly
  size?: "sm" | "lg" | undefined
  children: ReactNode
}

export const Text = ({size, children}: IText) => {
  return (
    <StyledText size={size} >
      {children}
    </StyledText>
  )
}
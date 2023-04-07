import { ButtonHTMLAttributes, ReactNode } from "react"
import { StyledButton } from "."

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  isActive: boolean
}

export const Button = ({children, isActive, ...props}: IButton) => {
  return <StyledButton disabled={isActive ? false : true} isActive={isActive} {...props}>{children}</StyledButton>
}
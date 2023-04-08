import { StyledButton } from "."
import { ButtonHTMLAttributes, ReactNode } from "react"

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  isActive: boolean
  variant: "green" | "red" | "blue" | "white"
}

export const Button = ({children, isActive, variant, ...props}: IButton) => {
  return <StyledButton variant={variant} disabled={isActive ? false : true} isActive={isActive} {...props}>{children}</StyledButton>
}
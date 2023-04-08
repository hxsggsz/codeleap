import { StyledInput } from "."
import { Text } from "../Text/text"
import { InputHTMLAttributes } from "react"

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  isActive: boolean
  isContent?: boolean
}

export const Input = ({ isActive, label, isContent, ...props }: IInput) => {
  return (
    <StyledInput isContent={isContent}>
      <label htmlFor="text" className={isActive ? "active" : ""} ><Text>{label}</Text></label>
      <input id="text" type="text" {...props} />
    </StyledInput>
  )
}
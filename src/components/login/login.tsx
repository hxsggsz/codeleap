import img from "/login.png"
import { Text } from "../Text/text"
import { StyledLogin } from "./index"
import { Input } from "../input/input"
import { Button } from "../button/button"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Login = () => {
  const nav = useNavigate()
  const [input, setInput] = useState("")
  const [error, setError] = useState("")
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    input !== "" ? setIsActive(true) : setIsActive(false)
  }, [input])

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault()

    if (input.toLowerCase() === "codeleap") {
      setError("")
      nav("/posts")
    }
    setError("Wrong username try with codeleap :)")
  }

  return (
    <StyledLogin>
      <div className="img">
        <img width={500} height={500} src={img} />
      </div>
      <main className="card">
        <Text size="lg">Welcome to CodeLeap network!</Text>
        <form onSubmit={handleSubmit}>
          <Input
            isActive={isActive}
            value={input}
            onChange={(ev) => setInput(ev.target.value)}
            label="Please enter your username"
          />
          {error && <Text size="sm">{error}</Text>}

          <div className="button">
            <Button isActive={isActive}>ENTER</Button>
          </div>
        </form>
      </main>
    </StyledLogin>
  )
}
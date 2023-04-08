import { CaretDoubleUp } from "phosphor-react"
import { StyledButtonTop } from "."
import { useState, useEffect, useCallback } from "react"
import { AnimatePresence } from "framer-motion"

export const TopButton = () => {
  const [IsbackTop, setIsbackTop] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 1000 ? setIsbackTop(true) : setIsbackTop(false)
    })
  }, [])

  const scrollTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [])

  return (
    <AnimatePresence>
      {IsbackTop && (
        <StyledButtonTop initial={{y: 200, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{opacity: 1, y: -100}} transition={{type: "keyframes"}} onClick={scrollTop}>
          <CaretDoubleUp size={25} weight="bold" />
        </StyledButtonTop>
      )}
    </AnimatePresence>
  )
}
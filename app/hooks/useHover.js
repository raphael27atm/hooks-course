import React from 'react'

const useHover = () => {
  const [hovering, setHovering] = React.useState(false)

  const onMouseHover = () => setHovering(true)
  const onMouseOut = () => setHovering(false)

  return [hovering, {
    onMouseHover,
    onMouseOut
  }]
}

export default useHover
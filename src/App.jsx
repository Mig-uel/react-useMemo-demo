import { useState, useMemo, useRef } from 'react'
import { initialItems } from './utils'

function App() {
  const [count, setCount] = useState(0)
  const [items] = useState(initialItems)

  const selectedItem = items.find((item) => item.isSelected)
  const handleClick = () => setCount(count + 1)

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem.id}</h1>

      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default App

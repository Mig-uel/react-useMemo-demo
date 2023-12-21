import { useState, useMemo } from 'react'
import { initialItems } from './utils'

function App() {
  const [count, setCount] = useState(0)
  const [items] = useState(initialItems)

  // const selectedItem = items.find((item) => item.isSelected)
  const selectedItemsMemo = useMemo(
    () => items.find((item) => item.isSelected),
    [items]
  )
  const handleClick = () => setCount(count + 1)

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItemsMemo.id}</h1>

      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default App

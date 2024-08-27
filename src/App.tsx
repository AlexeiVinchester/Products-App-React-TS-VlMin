import { createElement as e } from "react"

function App() {

  return e('div', {className: 'container'}, [
    e('h1', {className: 'font-bold', key: 1}, 'Test JSX'),
    e('button', {
      className: 'px-4 py-2 border', 
      key: 2, 
      onClick: () => console.log('Clicked!')
    }, 'Click me!')
  ]);
}

export default App

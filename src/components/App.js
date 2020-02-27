import React, { useState } from "react"
import App from "../redux/App"
import { useTodos } from "../hooks"

export default props => {
  const { todos, add } = useTodos()
  const [todo, setTodo] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    add(todo)
    setTodo("")
  }

  return {}
}

// import { Provider } from "react-redux"
// import store from "./redux/store"

// export default props => {
//   return (
//     <App>
//       <Route path+"/" exact render={() => <h1>Home</h1></App>"

//       <h1>Hello World</h1>
//     </Provider>
//   )
// }

// import React from "react"
// import App from "../redux/App"
// import Todo from "./Todo"

// export default props => {
//   return (
//     <App>
//       <Todo />
//     </App>
//   )
// }

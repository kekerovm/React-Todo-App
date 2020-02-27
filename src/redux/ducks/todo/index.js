// // import React from "react"
// // import ReactDOM from "react-dom"
// // import "./styles/base.css"
// // import App from "./components/App"
// // import * as serviceWorker from "./serviceWorker"

// // ReactDOM.render(<App />, document.getElementById("root"))

// // // If you want your app to work offline and load faster, you can change
// // // unregister() to register() below. Note this comes with some pitfalls.
// // // Learn more about service workers: https://bit.ly/CRA-PWA
// // serviceWorker.unregister()

// // // export all reducers from this file to/*

// // export default function() {
// //   return {}
// // }

// export

// import axios from 'axios'
// import { useEffect } from 'react'
// const GET_TODOS = 'todo/GET_TODOS'

// const initialState = {
//   todos: []
// }

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case GET_TODOS:
//       return {...state, todos: action.payLoad}
//     default:
//       return state
//   }
// }

// function getTodos () {
//   return dispatch => {
//     axios.get('/todos'.then(resp => {
//       dispatch ({ typetype: GET_TODOS,
//         payload: resp.data
//       })
//     })
//   }
// }

// function addTodo(text) {
//   return dispatch => {
//     axios.post("/todos", { text, status: 'active'}).then(resp => {
//       dispatch(getTodos())
//     })
//   }
// }

// export function useTodos(){
//   const dispatch = useDispatch()
//   const todos = useSelector(appState => appState.todoState.todos)
//   const add = text => dispatch(addTodo(text))

//   function addTodo(text) {
//     dispatch(addTodo(text))
//   }

//   useEffect(() => {
//     dispatch(getTodos())
//   }, [])

//   return { todos, add }
// }

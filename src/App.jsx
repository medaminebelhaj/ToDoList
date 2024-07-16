import { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import ListItem from './components/ListItem'

function App() {
  const [todoList, setTodoList] = useState([
    { id: nanoid(8), content: "item 1" },
    { id: nanoid(8), content: "item 2" },
    { id: nanoid(8), content: "item 3" },
  ])

  const [showValidation,setShowValidation] = useState(false)

  const [todo, setTodo] = useState("")
  function deleteTodo(id) {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }
function handleSubmit(e){
   e.preventDefault()

   if (todo == ""){
    setShowValidation(true)
    return
   }
   setTodoList([...todoList,{id: nanoid(),content :todo}])
   setTodo("")
   setShowValidation(false)
}

  return (
    <div className='h-screen bg-slate-900'> 
      <div className='max-w-4xl mx-auto pt-20 px-6'>
        <h1 className='text-3xl text-slate-100 mb-4'>To-do List</h1>
        <form onSubmit= {handleSubmit} className="mb-10">
          <label htmlFor="todo-item" className='text-slate-50'>Add something to do</label>
          <input 
          
          onChange={e => setTodo(e.target.value)}
          value={todo}
          type='text' 
          className='mt-1 block w-full rounded' id="todo-item"></input>
          { showValidation && ( 
            <p className='text-red-400'>
              Add something...
            </p>
          )

          }
          <button className='mt-4 py-2 px-2 bg-slate-50 rounded min-win-[115px]'>Add</button>
        </form>
        <ul>

        {todoList.length === 0 && (
          <li className='text-slate-50 text-md'>No items..</li>

        )}

          {todoList.length > 0 && todoList.map(item => (
            <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App

"use client"

import axios from 'axios';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  hashQueryKey,
} from 'react-query'

const queryClient = new QueryClient()

export default function Home() {
  return (
<QueryClientProvider client={queryClient}>
    <>
    <Todo/>
    </>
    </QueryClientProvider>
  );
}

 function Todo(){
  const getTodos= async ()=>{
    const data =await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
    // console.log(data);
    return data
    
  }
  const {data:todos} = useQuery('todos', getTodos)
  // console.log(data);
  
return(
  <>{
    <ul>
        {todos?.data.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
  }
  </>
  
)
}

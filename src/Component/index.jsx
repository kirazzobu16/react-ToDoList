import {useState} from 'react'

function Index() {
    

    const [form,setForm]=useState({toDo:""})
    const[list,setList]=useState([])
    

    const onChangeInputs =(e)=> {
		
        setForm({...form,[e.target.name]:e.target.value})
		
    }

    const OnSubmit=(e)=>{
        e.preventDefault();
        if(form.toDo===""){
            return false
        }
        setList([...list,form])
        setForm({toDo:""})
		
    }
	const deleteItem = (index) => {
		return setList(
		  list.filter((item,i) => {
			return i!== index;
		   })
		  );
		 };

	const changeItem= (e)=>{		
		if (e.target.style.textDecoration) {
		e.target.style.removeProperty('text-decoration');
		} else {
		e.target.style.setProperty('text-decoration', 'line-through');
		}
	}
		 
	const deleteAllItem=(item)=>{
		 return setList(list.filter(()=>{
			return item 
		 })
         

		 )
	}	  
		
				
			    
			
		
	 
	
  return (
    <div>
         <section class="todoapp">
	<header class="header">
		<h1>todos</h1>
		<form onSubmit={OnSubmit}>
			<input class="new-todo" name='toDo' value={form.toDo} placeholder="What needs to be done?" autoFocus onChange={onChangeInputs}/>
		</form>
	</header>
	
	<section class="main">
		<input class="toggle-all" type="checkbox" />
		<label for="toggle-all">
			Mark all as complete
		</label>

		<ul class="todo-list">
			{
                list.map((List,index)=> {
					return(
					<li  key={index} id={"Change"} >
					<div class="view">
					<label id='Change' onClick={changeItem}>{List.toDo}</label>
					<button class="destroy"   onClick={() => deleteItem(index)}></button>
					</div>	
					</li>)
				}					
				)
            }
			
		</ul>
	</section>

	<footer class="footer">
		<span class="todo-count">
			<strong>{list.length}</strong>
			items left
		</span>
		<button class="clear-completed" onClick={() =>deleteAllItem()}>
			Clear completed
		</button>
	</footer>
</section>

<footer class="info">
	<p>Click to edit a todo</p>
	<p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
	<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
</footer>


    </div>
  )
}

export default Index
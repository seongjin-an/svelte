<script lang="ts">
    import Todo from './Todo.svelte'

    let lastId = 0;

    const createTodo = (text, done = false) => ({id: ++lastId, text, done})

    let todoText = '';

    let todos = [
        createTodo('learn Svelte', true),
        createTodo('build a Svelte app')
    ];

    $: uncompletedCount = todos.filter(t => !t.done).length;

    $: status = `${uncompletedCount} of ${todos.length} remaining`;

    function addTodo(){
        todos = todos.concat(createTodo(todoText));
        todoText = '';
    }

    function archiveComplete(){
        todos = todos.filter(t => !t.done);
    }

    function deleteTodo(todoId){
        todos = todos.filter(t => t.id !== todoId);
    }

    function toggleDone(todo){
        const {id} = todo;
        todos = todos.map(t => (t.id === id ? {...t, done: !t.done} : t));
    }
</script>

<main>
    <div>
        <h1>안녕하세요 todo 리스트 입니다.</h1>
        <div>
            {status}
            <button on:click={archiveComplete}>Archive Completed</button>
        </div>
        <form on:submit|preventDefault>
            <input data-testid="todo-input" size="30" placeholder="enter new todo here" bind:value={todoText}/>
            <button disabled={!todoText} on:click={addTodo}>Add</button>
        </form>
        <ul>
            {#each todos as todo}
                <Todo {todo} on:delete={() => deleteTodo(todo.id)} on:toggleDone={() => toggleDone(todo)} />
            {/each}
        </ul>
    </div>
</main>

<style>
    button{
        margin-left: 10px;
    }
    ul{
        list-style: none;
        margin-left: 0;
        padding-left: 0;
    }
</style>
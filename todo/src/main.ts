// import App from './App.svelte';
//
// const app = new App({
// 	target: document.body,
// 	props: {
// 		name: 'world'
// 	}
// });
import TodoList from './TodoList.svelte'

const app = new TodoList({
	target: document.body
})

export default app;
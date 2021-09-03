import {cleanup, render} from "@testing-library/svelte";

import Todo from './Todo.svelte'
//참고
//npm install --save-dev jest@25.0.0 --force
//npm i -D svelte-jester@1.8.2 --force
describe('Todo', () => {
    const text = 'buy milk'
    const todo = {text}

    afterEach(cleanup)

    test('should render', () => {
        const {getByText} = render(Todo, {props: {todo}})
        const checkbox = document.querySelector('input[type="checkbox"]')
        expect(checkbox).not.toBeNull()
        expect(getByText(text))
        expect(getByText('Delete'))
    })
})
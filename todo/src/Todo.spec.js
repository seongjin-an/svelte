import {cleanup, render} from "@testing-library/svelte";

import Todo from './Todo.svelte'
//참고
//npm install --save-dev jest@25.0.0 --force
//npm i -D svelte-jester@1.8.2 --force
describe('Todo', () => {
    const text = 'buy milk'
    const todo = {text}

    afterEach(cleanup)//이 전 테스트에서 DOM에 추가한 모든 컴포넌트 제거

    test('should render', () => {
        const {getByText} = render(Todo, {props: {todo}})
        const checkbox = document.querySelector('input[type="checkbox"]')
        expect(checkbox).not.toBeNull()//체크박스를 찾은 경우
        expect(getByText(text))//todo 문자열을 찾은 경우
        expect(getByText('Delete'))//delete 버튼을 찾은 경우
    })
})
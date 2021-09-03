import {cleanup, fireEvent, render, waitFor} from "@testing-library/svelte";
import TodoList from './TodoList.svelte'

describe('TodoList', () => {
    const PREDEFINED_TODOS = 2

    afterEach(cleanup)

    function expectTodoCount(count){
        return waitFor(() => {//DOM이 업데이트될 때까지 기다리기 위해 프로미스를 반환한다.
            const lis = document.querySelectorAll('li')//각 Todo 컴포넌트는 최상위 요소로 li 요소를 가진다.
            expect(lis.length).toBe(count)
        })
    }

    test('should render', async () => {
        const {getByText} = render(TodoList)//컴포넌트 렌더하고 얻은 getByText는 화면의 텍스트 존재여부를 알려주는 것 같다
        expect(getByText('안녕하세요 todo 리스트 입니다.'))//text 검사
        expect(getByText('1 of 2 remaining'))
        expect(getByText('Archive Completed'))//button
        await expectTodoCount(PREDEFINED_TODOS)
    })

    test('should add a todo', async () => {
        const {getByTestId, getByText} = render(TodoList)

        //이 코드를 위해 src/TodoList.svelte 파일의 input 요소에 다음 속성을 추가(data-testid="todo-input")
        const input = getByTestId('todo-input')
        const value = 'buy milk'
        await fireEvent.input(input, {target: {value}})//테스트로 input에 값 할당해보고
        // console.log('getByText("Add"):', getByText('Add'))//HTMLButtonElement가 반환되면서 콘솔로그가 남겨짐
        await fireEvent.click(getByText('Add'))//테스트로 Add 라는 텍스트가 있는 HTMLButtonElement 를 찾아서 클릭
        await expectTodoCount(PREDEFINED_TODOS + 1)
        expect(getByText(value))//그랬을 때 정말로 추가되었는지 확인 가능
    })

    test('should archive completed', async () => {
        const {getByText} = render(TodoList)
        await fireEvent.click(getByText('Archive Completed'))//삭제 이벤트 fire
        await expectTodoCount(PREDEFINED_TODOS - 1)
        expect(getByText('1 of 1 remaining'))//그랬을 때 업데이트도 되었는지 확인 가능
    })

    test('should delete a todo', async () => {
        const {getAllByText, getByText} = render(TodoList)
        const text = 'learn Svelte'//첫 번째 할 일 항목에 대한 텍스트
        expect(getByText(text))

        const deleteBtns = getAllByText('Delete')
        await fireEvent.click(deleteBtns[0])//첫 번째 항목 삭제
        await expectTodoCount(PREDEFINED_TODOS - 1)
    })
})
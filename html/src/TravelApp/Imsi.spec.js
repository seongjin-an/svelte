import {cleanup, render} from '@testing-library/svelte'
import Item from './Item.svelte'
// import 'mocha'

describe('Item', () => {
    let categoryId = 1;
    let dnd = {}
    const item = {id: 2, name: 'socks', packed: false}
    
    // afterEach(cleanup)

    test('should render', () => {
        console.log("hi")
        const { getByTestId, getByText } = render(Item, {categoryId, dnd, item})
        const checkbox = document.querySelector('input[type="checkbox"]')
        console.log('checkbox:', checkbox)
        expect(checkbox).not.toBeNull();
        expect(getByText(item.name))
        expect(getByTestId('delete'))
    })
    // test('should render', () => {
    //     const {getByTestId, getByText} = render(Item, {categoryId, dnd, item})
    //     const checkbox = document.querySelector('input[type="checkbox"]')
    //     expect(checkbox).not.toBeNull()//체크박스를 찾을 수 있는지 테스트한다.
    //     expect(getByText(item.name))
    //     expect(getByTestId('delete'))
    // })
})
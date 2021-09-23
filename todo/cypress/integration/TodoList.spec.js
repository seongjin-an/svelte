const baseUrl = 'http://localhost:5000/'
describe('Todo app', () =>{
    it('should add todo', () => {
        cy.visit(baseUrl)
        cy.contains('1 of 2 remaining')
        cy.contains('Add')//문자가 입력되기 전까지 'Add' 버튼은 비활성화 상태여야 함
            .as('addBtn')//나중에 쓸 수 있도록 발견한 요소에 대한 참조를 저장해 둔다.
            .should('be.disabled')

        const todoText = 'buy milk'//할일 문자열을 입력한다.
        cy.get('[data-testid=todo-input]')
            .as('todoInput')
            .type(todoText)

        const addBtn = cy.get('@addBtn')
        addBtn.should('not.be.disabled')
        addBtn.click()

        cy.get('@todoInput').should('have.value', '')
        cy.get('@addBtn').should('be.disabled')
        cy.contains(todoText)
        cy.contains('2 of 3 remaining')
    })

    it('should toggle done', () => {
        cy.visit(baseUrl)
        cy.contains('1 of 2 remaining')

        cy.get('input[type=checkbox]')
            .first()
            .as('cb1')
            .click()
        cy.contains('2 of 2 remaining')

        cy.get('@cb1').check()
        cy.contains('1 of 2 remaining')
    })

    it('should delete todo', () => {
        cy.visit(baseUrl)
        cy.contains('1 of 2 remaining')

        const todoText = 'learn Svelte'
        cy.contains('ul', todoText)

        cy.contains('Delete').click()
        cy.contains('ul', todoText).should('not.exist')
        cy.contains('1 of 1 remaining')
    })

    it('should archive complete', () => {
        cy.visit(baseUrl)

        const todoText = 'learn Svelte'
        cy.contains('ul', todoText)

        cy.contains('Archive Completed').click()
        cy.contains('ul', todoText).should('not.exist')
        cy.contains('1 of 1 remaining')
    })
})
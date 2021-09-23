const baseUrl = 'http://localhost:5000/';

function login(){
    cy.visit(baseUrl)
    cy.contains('Username')
        .children('input')
        .type('username')
    cy.contains('Password')
        .children('input')
        .type('password')
    cy.get('button')
        .contains('Login')
        .click()
}

function addCategories(){
    login()
    cy.get('[data-testid=category-name-input]')
        .as('nameInput')
        .type('Clothes')
    cy.get('button')
        .contains('Add Category')
        .click()
    cy.get('@nameInput').type('Toiletries{enter}')
    //type메서드로 문자열을 전달할 때, 이 문자열에 {enter}가 포함되어 있으면 사용자가 엔터키를 누르는 것을 흉내 낸다.
}

function addItems(){
    addCategories()
    cy.get('[data-testid=item-input]')
        .first()
        .as('item-input-1')
        .type('socks')
    cy.get('button')
        .contains('Add Item')
        .first()
        .click()
    cy.get('@item-input-1').type('shoes{enter}')
    verifyStatus('Clothes', '2 of 2 remaining')
    cy.get('[data-testid=item-input]')
        .last()
        .type('rezor{enter}')
    verifyStatus('Toiletries', '1 of 1 remaining')
}
function deleteCategory(categoryName){
    cy.contains(new RegExp(`^${categoryName}$`))
        .siblings('button')
        .click()
}
function deleteItem(itemName){
    cy.contains(new RegExp(`^${itemName}$`))
        .siblings('button')
        .click()
}
function togglePacked(itemName){
    cy.contains(new RegExp(`^${itemName}$`))
        .siblings('input[type="checkbox"]')
        .click()
}
function verifyStatus(categoryName, expectedStatus){
    cy.contains(new RegExp(`^${categoryName}$`))
    //이 기능은 올바른 요소가 있는지 확인하는 데 유용하다
    //일치하는 모든 요소 주위에 빨간색 윤곽선을 그린다.
    //.then(el => el.css('outline', 'solid red'))
        .siblings('span')
        .contains(expectedStatus)
}

describe('Travel Packing app', () => {
    it('should login', login)
    it('should add Categories', addCategories)
    it('should add items', addItems)
    it('should toggle packed', () => {
        addItems()
        verifyStatus('Clothes', '2 of 2 remaining')

        togglePacked('shoes')
        verifyStatus('Clothes', '1 of 2 remaining')

        togglePacked('shoes')
        verifyStatus('Clothes', '2 of 2 remaining')
    })


})
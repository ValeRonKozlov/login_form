describe('The home page', () => {
  // тест проверяет наличие элементов на странице и отправку формы
  it('loaded', () => {
    cy.visit('http://localhost:4242/')

    cy.get('#root')

    cy.get('body')
    
    cy.get('div.login-container')

    cy.get('h1.login-title').should('contain', 'Авторизация')

    cy.get('form')

    cy.get('input[name=email]')
    .type('email@example.com')
    .should('have.value', 'email@example.com')

    cy.get('input[name=password]')
    .type('password')
    .should('have.value', 'password')

    cy.get('button').should('contain', 'Войти')

    cy.get("form").submit();
    
    });
  });

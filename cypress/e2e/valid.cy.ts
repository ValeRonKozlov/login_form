describe('The home page', () => {
  // тест проверяет наличие элементов на странице и отправку формы
  it('loaded', () => {
    // Заходим на сайт
    cy.visit('http://localhost:4242/')
    // получаем корневой элемент приложения
    cy.get('#root')
    // получаем тело сайта
    cy.get('body')
    // получаем контейнер
    cy.get('div.login-container')
    // проверка наличия загаловка и правильность его написания
    cy.get('h1.login-title').should('contain', 'Авторизация')
    // наличие формы
    cy.get('form')
    // ввод в инпут валидного адреса
    cy.get('input[id=email]')
    .type('email@example.com')
    .should('have.value', 'email@example.com')
    // ввод в инпут валидного пароля
    cy.get('input[id=password]')
    .type('Aa123456')
    .should('have.value', 'Aa123456')
    // проверка кнопки на наличие названия
    cy.get('button').should('contain', 'Войти')
    // отправка формы
    cy.get("form").submit();
    
    });
  });

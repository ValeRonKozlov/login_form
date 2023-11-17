describe('The home page', () => {
  // тест проверяет наличие элементов на странице и отправку формы
  it('loaded', () => {
    cy.visit('http://localhost:4242/')
		// ввод email
    cy.get('input[id=email]')
    .type('123')
    .should('have.value', '123')
		// ввод password
    cy.get('input[id=password]')
    .type('A3456')
    .should('have.value', 'A3456')
		// проверка наличия ошибок
		cy.get('span.my-span-error').should(($span) => {
			const text = $span.text()
		
			expect(text).to.match(/Email неверный!Password неверный!/)
			expect(text).to.include('Email неверный!Password неверный!')
		})
		// неактивная кнопка
    cy.get('button.disabled')

    });
  });

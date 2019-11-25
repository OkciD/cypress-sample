describe('Sample page', () => {
	before(() => {
		cy.visit('/');
	});

	it('successfully loads', () => {
		cy.get('body').should('be.visible');
	});

	it('add elements to list on submit', () => {
		cy.get('[data-test-id="input"]')
			.as('input')
			.type('kek')
			.should('have.value', 'kek');

		cy.get('[data-test-id="button"]')
			.click();

		cy.get('[data-test-id="list"]')
			.children()
			.contains('kek');

		cy.get('@input')
			.should('not.have.value');
	});
});

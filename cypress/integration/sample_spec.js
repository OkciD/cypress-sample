describe('Sample page', () => {
	it('successfully loads', () => {
		cy.visit('/');
		cy.get('body').should('be.visible');
	});
});

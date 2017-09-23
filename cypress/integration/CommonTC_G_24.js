it('CommonTC_G_24', function() {
    cy.visit('http://52.187.8.102/');
    cy.get('[name="email"]').type('admin_10@gmail.com');
    cy.get('[name="password"]').type('Methadone@2017');
    cy.get('[type="submit"]').click();
});
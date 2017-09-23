it('Tìm kiếm không phân biệt chữ hoa, chữ thường', function() {
    cy.visit('http://52.187.8.102/');
    cy.get('[name="email"]').type('admin_10@gmail.com');
    cy.get('[name="password"]').type('Methadone@2017');
    cy.get('[type="submit"]').click();
    cy.wait(1000);
    cy.visit('http://52.187.8.102/main/admin/administrators/issuing_agency');
    cy.get('[ng-model="keyword"]').type('Tâm {enter}');
    cy.wait(500);
    cy.get('tbody > tr:nth-child(1) > td:nth-child(3)').should('contain', 'tâm');
});
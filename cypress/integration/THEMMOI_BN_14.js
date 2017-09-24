it('Kiểm tra focus trong hộp calendar khi textbox đã có dữ liệu', function(){
    cy.visit('signin');
    cy.get('[name="email"]').type('admin_agency_10@gmail.com');
    cy.get('[name="password"]').type('Methadone@2017');
    cy.get('[type="submit"]').click();
    cy.wait(1000);
    cy.visit('main/patients/new');
    cy.get('[name="birth_date"]').type('20/10/2005');
    cy.get('.active.day').should('contain','20');
    cy.get('.datepicker-days .datepicker-switch').should('contain','October 2005');
})
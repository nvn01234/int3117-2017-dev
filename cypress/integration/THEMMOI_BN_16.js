it('Kiểm tra thao tác nhập ngày', function(){
    cy.visit('signin');
    cy.get('[name="email"]').type('admin_agency_10@gmail.com');
    cy.get('[name="password"]').type('Methadone@2017');
    cy.get('[type="submit"]').click();
    cy.wait(1000);
    cy.visit('main/patients/new');
    cy.get('[name="birth_date"]').type('123456');
    cy.get('[ng-messages="form.birth_date.$error"]>[ng-message="pattern"]').should('contain','Ngày tháng không đúng định dạng')


});
it('Kiểm tra hoạt động của hộp Calendar', function(){
    cy.visit('signin');
    cy.get('[name="email"]').type('admin_agency_10@gmail.com');
    cy.get('[name="password"]').type('Methadone@2017');
    cy.get('[type="submit"]').click();
    cy.wait(1000);
    cy.visit('main/patients/new');
    cy.get('[name="birth_date"] + .input-group-btn > .btn').click();
    cy.get('.datepicker-days .prev').click();
    cy.get('.datepicker-days tbody > tr:first-child > td:not(.old)').eq(0).click();
    var today = new Date();
    var day = new Date(today.getFullYear(),today.getMonth() - 1, 1);
    var string = ["01"];
    if (day.getMonth() < 9) string.push("0" + (day.getMonth() + 1));
    else string.push("" + (day.getMonth() + 1));
    string.push(day.getFullYear());
    string = string.join("/");
    cy.get('[name="birth_date"]').should('have.value',string);
});
it('Kiểm tra ngày sinh không đựoc lớn hơn ngày hiện t', function(){
    cy.visit('signin');
    cy.get('[name="email"]').type('admin_agency_10@gmail.com');
    cy.get('[name="password"]').type('Methadone@2017');
    cy.get('[type="submit"]').click();
    cy.wait(1000);
    cy.visit('main/patients/new');
    cy.get('[name="birth_date"] + .input-group-btn > .btn').click();
    cy.get('.today.day').click();
    cy.get('[ng-messages="form.birth_date.$error"]>[ng-message="dateLess"]').should('contain','Vui lòng nhập ngày nhỏ hơn ngày hiện tại')
})
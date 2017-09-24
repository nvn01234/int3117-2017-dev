it('Kiểm tra giá trị mặc định trường trường "Loại giấy tờ"', function(){
    cy.visit('signin');
    cy.get('[name="email"]').type('admin_agency_10@gmail.com');
    cy.get('[name="password"]').type('Methadone@2017');
    cy.get('[type="submit"]').click();
    cy.wait(1000);
    cy.visit('main/patients/new');
    cy.get('[ng-submit="form.$valid && createPatient()"] [name="identification_type"] [ng-show="$select.isEmpty()"').should('contain','-- Vui lòng chọn --');
    cy.get('[ng-submit="form.$valid && createPatient()"] [name="identification_type"]').click();
    cy.get('[ng-bind-html="identification_type | translator: \'patient\' | highlight: $select.search"]').eq(0).should('contain','CMND');
    cy.get('[ng-bind-html="identification_type | translator: \'patient\' | highlight: $select.search"]').eq(1).should('contain','Sổ hộ khẩu');
    cy.get('[ng-bind-html="identification_type | translator: \'patient\' | highlight: $select.search"]').eq(2).should('contain','Giấy phép lái xe');
    cy.get('[ng-bind-html="identification_type | translator: \'patient\' | highlight: $select.search"]').eq(3).should('contain','Hộ chiếu');
});
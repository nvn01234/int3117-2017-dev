var uuid = require('uuid');

it('Kiểm tra thực hiện thành công khi dữ liệu là chữ tiếng Việt có dấu', function() {
    // login
    cy.visit('http://52.187.8.102/');
    cy.get('body > div > div.login.ng-scope > div.content > form > div:nth-child(2) > div > input').type('admin_10@gmail.com');
    cy.get('body > div > div.login.ng-scope > div.content > form > div:nth-child(3) > div > input').type('Methadone@2017');
    cy.get('body > div > div.login.ng-scope > div.content > form > button').click();

    // danh sách thuốc
    cy.wait(1000);
    cy.visit('http://52.187.8.102/main/admin/administrators/medicine_list');
    cy.wait(500);

    // add
    var name = uuid.v4();
    cy.get('body > div > div.page-container.ng-scope > div > div.page-content-wrapper > div > div > div > div.portlet-title > div.inputs > a').click();
    cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > div:nth-child(1) > div.col-xs-8.form-group > input').type(name);
    cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > div:nth-child(2) > div.col-xs-8.form-group > input').type('Thành phần');
    cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > div:nth-child(3) > div.col-xs-8.form-group > input').type('01111');
    cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > div:nth-child(4) > div.col-xs-8.form-group > input').type(1000);
    cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > div:nth-child(5) > div.col-xs-8.form-group > input').type('Đơn vị tính');
    cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > div:nth-child(7) > div.col-xs-8.form-group > div.ui-select-container.select2.select2-container.ng-pristine.ng-untouched.ng-scope.ng-empty.ng-invalid.ng-invalid-required > a > span.select2-chosen.ng-binding').click();
    cy.get('.select2-result-label.ui-select-choices-row-inner').eq(0).click();
    cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-footer > button').click();

    // test
    cy.wait(1000);
    cy.get('body > div > div.page-container.ng-scope > div > div.page-content-wrapper > div > div > div > div.portlet-title > div.row > div > div:nth-child(1) > form > input').type(name);
    cy.get('body > div > div.page-container.ng-scope > div > div.page-content-wrapper > div > div > div > div.portlet-title > div.row > div > div:nth-child(3) > div > a').click();
    cy.wait(1000);
    cy.get('body > div > div.page-container.ng-scope > div > div.page-content-wrapper > div > div > div > div.portlet-body > div.max-width-100-pc.scrollable > table > tbody > tr:nth-child(1) > td:nth-child(4)').should('not.contain', '0');
});
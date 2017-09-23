it('Kiểm tra chức năng Trim space', function() {
    // login
    cy.visit('http://52.187.8.102/');
    cy.get('body > div > div.login.ng-scope > div.content > form > div:nth-child(2) > div > input').type('admin_10@gmail.com');
    cy.get('body > div > div.login.ng-scope > div.content > form > div:nth-child(3) > div > input').type('Methadone@2017');
    cy.get('body > div > div.login.ng-scope > div.content > form > button').click();

    // danh sách cơ sở
    cy.get('body > div > div.page-container.ng-scope > div > div.page-sidebar.navbar-collapse.collapse > ul > li:nth-child(4) > a').click();

    // add
    cy.get('body > div > div.page-container.ng-scope > div > div.page-content-wrapper > div > div > div > div.portlet-title > div.inputs > a').click();
    cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > div:nth-child(1) > div:nth-child(2) > input').type('               name                    ');
    cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > div:nth-child(1) > div:nth-child(4) > input').type('HN');
    cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > div:nth-child(2) > div:nth-child(2) > div.ui-select-container.select2.select2-container.ng-pristine.ng-untouched.ng-scope.ng-empty.ng-invalid.ng-invalid-required > a > span.select2-chosen.ng-binding').click();
    cy.get('#ui-select-choices-row-0-0 > div > span').click();
    cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > div:nth-child(2) > div:nth-child(4) > div.ui-select-container.select2.select2-container.ng-pristine.ng-untouched.ng-scope.ng-empty.ng-invalid.ng-invalid-required > a > span.select2-chosen.ng-binding').click();
    cy.get('#ui-select-choices-row-1-0 > div').click();
    cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > div:nth-child(2) > div:nth-child(6) > div.ui-select-container.select2.select2-container.ng-pristine.ng-untouched.ng-scope.ng-empty.ng-invalid.ng-invalid-required > a > span.select2-chosen.ng-binding').click();
    cy.get('#ui-select-choices-row-2-0 > div').click();
    cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-footer > button').click();

    // test
    cy.get('body > div > div.page-container.ng-scope > div > div.page-content-wrapper > div > div > div > div.portlet-body > div.max-width-100-pc.scrollable > table > tbody > tr:nth-child(1) > td:nth-child(3)').should('not.contain', ' ');
});
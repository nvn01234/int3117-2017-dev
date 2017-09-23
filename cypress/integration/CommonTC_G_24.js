it('Tìm kiếm không phân biệt chữ hoa, chữ thường', function() {
    // login
    cy.visit('http://52.187.8.102/');
    cy.get('body > div > div.login.ng-scope > div.content > form > div:nth-child(2) > div > input').type('admin_10@gmail.com');
    cy.get('body > div > div.login.ng-scope > div.content > form > div:nth-child(3) > div > input').type('Methadone@2017');
    cy.get('body > div > div.login.ng-scope > div.content > form > button').click();

    // danh sách cơ sở
    cy.get('body > div > div.page-container.ng-scope > div > div.page-sidebar.navbar-collapse.collapse > ul > li:nth-child(4) > a').click();

    // search
    cy.get('body > div > div.page-container.ng-scope > div > div.page-content-wrapper > div > div > div > div.portlet-title > div.inputs > div > div > form > input').type('Tâm {enter}');
    cy.get('body > div > div.page-container.ng-scope > div > div.page-content-wrapper > div > div > div > div.portlet-body > div.max-width-100-pc.scrollable > table > tbody > tr:nth-child(1) > td:nth-child(3)').should('contain', 'tâm');
});
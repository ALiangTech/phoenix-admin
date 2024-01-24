import HasPermission from './../HasPermission.vue';

describe('<HasPermission />', () => {
  it('有权限场景', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(HasPermission, {
      slots: {
        default: 'show',
      },
      props: {
        code: '123',
        permissionCodeSet: ['123'],
      },
    });
    cy.contains('show').should('exist');
  });
  it('无权限场景', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(HasPermission, {
      slots: {
        default: 'show',
      },
      props: {
        code: '456',
        permissionCodeSet: ['123'],
      },
    });
    cy.get('body').contains('show').should('not.exist');
  });
});

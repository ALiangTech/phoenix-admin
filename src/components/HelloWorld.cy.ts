import Button from './HelloWorld.vue';

it('uses custom text for the button label', () => {
  cy.mount(Button, {
    slots: {
      default: 'Click me!',
    },
  });
  cy.get('button').should('contains.text', 'Click me!');
});

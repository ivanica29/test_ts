// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

import MovieStore from "../../src/stores/movies";
import {Provider} from "mobx-react";
import {Homepage} from "../../src/pages";

describe('Example Cypress TodoMVC test', () => {
  beforeEach(() => {
    const store = new MovieStore();
    mount(
        <Provider store={store}>
          <main>
            <Homepage />
          </main>
        </Provider>
    );

    if (window.Cypress) {
      window.store = store;
    }
  })

  it('adds 2 todos', function () {
    cy.window().its('store')
        .invoke('getMovies')
    // cy.get('.new-todo')
    //   .type('learn testing{enter}')
    //   .type('be cool{enter}')
    // cy.get('.todo-list li').should('have.length', 2)
  })

  // more examples
  //
  // https://github.com/cypress-io/cypress-example-todomvc
  // https://github.com/cypress-io/cypress-example-kitchensink
  // https://on.cypress.io/writing-your-first-test
})

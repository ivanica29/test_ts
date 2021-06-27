import { movieStore } from '../../src/stores/movies';

beforeEach(() => {
  cy.visit('http://localhost:3000', {
    onBeforeLoad (win) {
      win.disableIntercom = true;
      win.store = movieStore;
    }
  })
});

it('Movies eq to 0', () => {
  cy.window()
      .its('store')
      .its('movies')
      .its('length').should('eq', 0)
});

it('Get movies', () => {
  cy.window()
      .its('store')
      .invoke('getMovies')

  cy.window()
      .its('store')
      .its('movies')
      .its('length').should('be.gt', 0)
});

it('Check movie', () => {
  cy.window()
      .its('store')
      .its('movies')
      .each((item : {[key: string] : string | number} , index) => {
        if (index === 0) {
          cy.get(`[data-cy="movie_id-${item.id}"]`)
              .should('exist');
        }
      })
});

it('On movie click', () => {
    cy.window()
        .its('store')
        .its('movies')
        .each((item : {[key: string] : string | number} , index) => {
            if (index === 2) {
                cy.get(`[data-cy="movie_link-${item.id}"]`).click();
                cy.url().should('include', item.id)
            }
        })
})

it('Invalid movie', () => {
    cy.visit('http://localhost:3000/-1');
    cy.get('[data-cy=movie_title]').should('not.exist');
});

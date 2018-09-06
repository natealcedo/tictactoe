describe("Jarvis", () => {
  it("Should have a winner", () => {
    cy.visit("/");
    cy.get('input[name="player-one"]').type("Nate");
    cy.get('input[name="player-two"]').type("Bob");
    cy.get(".button").click();

    cy.get('.square[name="row-0-column-0"]').click();
    cy.get('.square[name="row-0-column-1"]').click();
    cy.get('.square[name="row-1-column-0"]').click();
    cy.get('.square[name="row-0-column-2"]').click();
    cy.get('.square[name="row-2-column-0"]').click();
    cy.contains("NATE won!");
  });

  it("Should have draw", () => {
    cy.visit("/");

    cy.get('input[name="player-one"]').type("Nate");
    cy.get('input[name="player-two"]').type("Bob");
    cy.get(".button").click();

    cy.get('.square[name="row-0-column-0"]').click();
    cy.get('.square[name="row-1-column-0"]').click();

    cy.get('.square[name="row-0-column-1"]').click();
    cy.get('.square[name="row-1-column-1"]').click();

    cy.get('.square[name="row-2-column-0"]').click();
    cy.get('.square[name="row-0-column-2"]').click();

    cy.get('.square[name="row-2-column-1"]').click();
    cy.get('.square[name="row-2-column-2"]').click();

    cy.get('.square[name="row-1-column-2"]').click();

    cy.contains("Game Drawn");
  });
});

/// <reference types="cypress" />

describe("Test all routes", () => {
  before(() => {
    cy.visit("/");
  });

  it("Should go to home route", () => {
    cy.contains("DONALD EBUBE").should("exist");
    cy.contains("Product Designer").should("exist");
    cy.contains(
      "Freelance visual product designer based in Lagos, Nigeria."
    ).should("exist");
    cy.contains("Services").should("exist");
    cy.contains("Designs").should("exist");
    cy.contains("Contact").should("exist");
  });

  it("Should go to Services route", () => {
    cy.contains("Services").should("exist").click();
    cy.contains("Web Design").should("exist");
    cy.contains("Visual Elements of User Interface Design").should("exist");
  });

  it("Should go to Contact route", () => {
    cy.get(".sc-eCImPb > .anticon > svg").click();
    cy.contains("Contact").should("exist").click();
    cy.contains("donaldebube@yahoo.com").should("exist");
    cy.contains("manlikeked").should("exist");
  });
});

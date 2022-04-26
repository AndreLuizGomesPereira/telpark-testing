/// <reference types="Cypress" />

describe("Access on telpark.com", () => {
  it("should login on Telpark", () => {
    cy.visit("https://telpark.com/");

    if (cy.contains("política de cookies.")) {
      cy.get("#onetrust-accept-btn-handler").click({ force: true }).wait(3000);
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      cy.get("#menu-item-3084 > a").should("be.visible").click();
      cy.get("#inputEmail").type("andregomesenator@gmail.com").wait(1000);
      cy.get("#id3 > .controls > #inputPassword").type("123456").wait(1000);
      cy.get("#id4 > .controls > #inputPassword").type("123456").wait(1000);
      cy.get(".btn").click();
      if (!cy.contains("Verifique o seu email")) {
        console.error("Erro ao fazer login");
      }
    }
  });

  it("Not should login on Telpark", () => {
    cy.visit("https://telpark.com/");

    if (cy.contains("política de cookies.")) {
      cy.get("#onetrust-accept-btn-handler").click({ force: true }).wait(3000);
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      cy.get("#menu-item-3084 > a").should("be.visible").click();
      cy.get("#inputEmail").type("andregomesenator").wait(1000);
      cy.get("#id3 > .controls > #inputPassword").type("123456").wait(1000);
      cy.get("#id4 > .controls > #inputPassword").type("123456").wait(1000);
      cy.get(".btn").click();
      if (!cy.contains("Verifique o seu email")) {
        console.error("Erro ao fazer login");
      }
    }
  });
});

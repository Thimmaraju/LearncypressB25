/// <reference types="Cypress" />

describe("sauce demo login", () => {
    it("verify login with standard user", () => {
      cy.visit("/");
      cy.get("input[id='user-name']").type("standard_user");
      cy.get("input[id='password']").type("secret_sauce");
      cy.get("input[type = 'submit']").click();
      cy.url().should("eq", "https://www.saucedemo.com/v1/inventory.html");
      cy.get("button[class *= 'btn_inventory']").first().click();
      cy.get("svg[role='img']").click();
      cy.get(".btn_action.checkout_button").click();
      cy.get("#first-name").type("Alaina");
      cy.get("#last-name").type("SS");
      cy.get("#postal-code").type("10461");
      cy.get("input[value='CONTINUE']").click();
      cy.get(".btn_action.cart_button").click();
      cy.contains("THANK YOU FOR YOUR ORDER").should("be.visible");
    });
  
    it("verify locked out user", () => {
      cy.visit("/");
      cy.get("input[id='user-name']").type("locked_out_user");
      cy.get("input[id='password']").type("secret_sauce");
      cy.get("input[type = 'submit']").click();
      cy.get("h3[data-test='error']").should("be.visible");
      cy.contains("Sorry, this user has been locked out.").should("be.visible");
    });
  
    it("verify problematic user", () => {
      cy.visit("/");
      cy.get("input[id='user-name']").type("problem_user");
      cy.get("input[id='password']").type("secret_sauce");
      cy.get("input[type = 'submit']").click();
      cy.url().should("eq", "https://www.saucedemo.com/v1/inventory.html");
      cy.get("img[class = 'inventory_item_img']")
        .should("be.visible")
        .and(($img) => expect($img[0].naturalWidth).to.eq(0));
    });
    it("verify performance glitch user", () => {
      cy.visit("/");
      cy.get("input[id='user-name']").type("performance_glitch_user");
      cy.get("input[id='password']").type("secret_sauce");
      cy.get("input[type = 'submit']").click();
      cy.url().should("eq", "https://www.saucedemo.com/v1/inventory.html");
    });
  });
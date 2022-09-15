import data from "../fixtures/data.json";
import Languages from "../pom/chooseLanguage";

// page object models
const { chooseLanguage, getTranslationResult } = new Languages();

// Cypress custom comands: cy.findByAriaLabel and cy.findByAriaLive
// Cypress testing library: cy.findByText

describe("UI automation google translate page", () => {
  before(() => {
    cy.visit("/");
  });

  it("Choose languages, type initial text and assert expected result", () => {
    chooseLanguage("More source languages", data.sourceLanguage);
    chooseLanguage("More target languages", data.translationLanguage);
    cy.get("textarea").should("be.empty").type(data.initialText);
    getTranslationResult(data.expectedResult);
  });

  it("Click swap languages button and verify the result", () => {
    cy.findByAriaLabel("Swap languages (Cmd+Shift+S)").click();
    cy.get("textarea").should("have.value", data.expectedResult);
    getTranslationResult(data.initialText);
  });

  it("Clear the input field, click 'select input tool' button, select 'screen keyboard' and  enter 'Hi!'", () => {
    chooseLanguage("More source languages", data.sourceLanguage);
    cy.get("textarea:visible").clear();
    cy.get("a[role='button'] span").first().should("be.visible").click();
    data.hiText.split("").forEach((letter) => {
      letter == letter.toUpperCase() && cy.get("#K16").click();
      cy.findByText(letter, { selector: "span" }).click();
    });
    cy.get("textarea").should("have.value", data.hiText);
  });
});

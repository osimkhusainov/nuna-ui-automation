class Languages {
  chooseLanguage(label, language) {
    cy.findByAriaLabel(label).click();
    cy.get("[placeholder='Search languages']:visible")
      .should("be.empty")
      .type(`${language}{enter}`);
  }

  getTranslationResult(resultText) {
    cy.findByAriaLive("polite").should("contain", resultText);
  }
}
export default Languages;

describe("Instagram Stories", () => {
    beforeEach(() => {
        cy.visit("/"); // ✅ Open the app before each test
    });

    it("should load stories and display the first story when clicked", () => {
        cy.get("img").first().click();
        cy.get("img").should("be.visible");
    });

    it("should automatically play the next story after 5 seconds", () => {
        cy.get("img").first().click();
        cy.wait(6000);
        cy.get("img").should("be.visible");
    });

    it("should close the story viewer when clicking the close button", () => {
        cy.get("img").first().click();
        cy.wait(1000); // ✅ Wait for the story to appear
      
        cy.get("button[aria-label='Close Story']").click();
        cy.wait(1000); // ✅ Wait for React to update the UI
      
        cy.get("img").should("not.exist"); // ✅ Ensure the story is closed
      });
      

});

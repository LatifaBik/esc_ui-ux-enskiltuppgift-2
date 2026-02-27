describe("Hacker Escape Rooms - smoke test", () => {
  it("Sidan är uppe på localhost och visar korrekt H1", () => {
    cy.visit("/");                 // kontrollerar att sidan laddar
    cy.location("hostname").should("eq", "localhost");

    // Kontrollera statisk text i H1 (byt texten till din riktiga rubrik!)
    cy.get("h1").should("be.visible");
    cy.get("h1").should("contain.text", "Popular challenges right now");
  });
});
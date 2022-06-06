/// <reference types="cypress" />
/// <reference types = "Cypress-iframe"/>
import 'cypress-iframe'
class paymentDeatilsPage{

    selectCreditcardRadio()
    {
     const cc=cy.get('[type="radio"][value="bt"]')
     cc.click({force:true})
    }

    enterCardHolderName(cardHolderName)
    {
        const cholder = cy.get('[id="cardholderName"]')
        cholder.clear()
        cholder.type(cardHolderName)
        cholder.click()
    }
    enterCardNumber(cardnumber)
    {
        cy.get("#card-number").within(() => {
            cy.frameLoaded();
            cy.iframe().find(".number").type(cardnumber);
          });
       
    }
    enterCardExpiry(cardExpiry)
    {
        cy.get("#card-expiration-date").within(() => {
            cy.frameLoaded();
            cy.iframe().find(".expirationDate").type(cardExpiry);
          });
    }
    enterCardCVV(cardCVV)
    {
        cy.get("#card-cvv").within(() => {
            cy.frameLoaded();
            cy.iframe().find(".cvv").type(cardCVV);
          });
    }

   selectgiftId()
    {
     const cc=cy.get('[type="checkbox"][name="giftAid"]')
     cc.check()
     cy.wait(5000)
    }

    completeDonation()
    {
        cy.get("button[type='submit']").click();
        cy.wait(35000);
    }
}
export default paymentDeatilsPage
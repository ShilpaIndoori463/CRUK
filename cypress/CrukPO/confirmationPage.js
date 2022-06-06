/// <reference types="cypress" />
class confirmationPage
{
    confirmationMessage(firstname,amount)
    {
        cy.contains(
            "h2",
            `Thank you ${firstname} for your donation of £${Number(
               amount
           ).toFixed(2)}`
         )
   
        //cy.contains('Thank you')
    }
}
export default confirmationPage
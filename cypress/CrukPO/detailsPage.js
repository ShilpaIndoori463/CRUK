/// <reference types="cypress" />
class detailsPage
{
    enterFirstName(firstName)
    {
        const fName= cy.get('[id="forename"]')
        fName.clear()
        fName.type(firstName)
        return this
    }
    enterLastName(surName)
    {
        const sName= cy.get('[id="surname"]')
        sName.clear()
        sName.type(surName)
        return this
    }
    enterEmailId(emailId)
    {
        const emailID= cy.get('[id="emailAddress"]')
        emailID.clear()
        emailID.type(emailId)
        return this
    }
    enterPhoneNo(phoneNumber)
    {
        const phNumber= cy.get('[id="phoneNumber"]')
        phNumber.clear()
        phNumber.type(phoneNumber)
        return this
    }
    enterPostcode(postalCode)
    {
        const pCode= cy.get('[name="postalCode"]')
        pCode.clear()
        pCode.type(postalCode)
        return this
    }

    selectTheEntertheAddrMannually()
    {
    cy.contains("Enter address manually").click()
    }
    enterAddrline(addressLine)
    {
        const addLine1= cy.get('[name="addressLine1"]')
        addLine1.clear()
        addLine1.type(addressLine)
        return this
    }
    enterTown(city)
    {
        const town= cy.get('[name="city"]')
        town.clear()
        town.type(city)
        return this
    }
    enterTown(city)
    {
        const town= cy.get('[name="city"]')
        town.clear()
        town.type(city)
        return this
    }
    selectCountry(country)
    {
        const count= cy.get('[name="country"]')
        count.select(country)
        return this
    }

    selectemailoption(emailoptionNo)
    {
        if(emailoptionNo == 'no'){
        const emailopt=cy.get('[name="emailOptIn"][value="no"]')
        emailopt.click({force:true})
        }
        else
        {
            const emailopt=cy.get('[name="emailOptIn"][value="yes"]')
            emailopt.click({force:true})  
        }
    }

    selectContinueInDetails()
    {
        const submit=cy.get('[type="submit"][class="sc-dlnjwi kffsok"]')
        submit.click()
        cy.wait(3000)
        cy.url().should('eq','https://app.pws.int.cruk.org/support-us/payment')
    }

}
export default detailsPage
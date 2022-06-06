/// <reference types="cypress" />

import pageObjects from '../CrukPO/pageObjects'
import detailsPage from '../CrukPO/detailsPage'
import paymentDeatilsPage from '../CrukPO/paymentDeatilsPage'
import confirmationPage from '../CrukPO/confirmationPage'

describe("VERIFY CRUK Donation Page",()=>{

  it("Perform Donation operation",()=>
  {
    cy.on('uncaught:exception', (err, runnable) => {

          return false
    })
    const pobj=new pageObjects()
    const dobj=new detailsPage()
    const payobj=new paymentDeatilsPage()
    const cofobj=new confirmationPage()
    pobj.navigateToDonationPage()
    cy.fixture('donor.json').then(donor=>{
    pobj.enterTheAmount(donor.amount)
    pobj.selectTheDonationtype(donor.donationType)
    pobj.selectTheMotivationtype(donor.motivation)
    pobj.selectTheDonationArea(donor.cancerType)
    pobj.selectContribue()
    //Details Page
    dobj.enterFirstName(donor.firstname)
    dobj.enterLastName(donor.lastname)
    dobj.enterEmailId(donor.email)
    dobj.enterPhoneNo(donor.phone)
    dobj.selectTheEntertheAddrMannually()    
    dobj.enterAddrline(donor.homeAddress.address1)
    dobj.enterTown(donor.homeAddress.town)
    dobj.enterPostcode(donor.homeAddress.postcode)
    pobj.selectCountry(donor.homeAddress.country)
    dobj.selectemailoption(donor.emailOptIn)
    dobj.selectContinueInDetails()
    //Payment page

    payobj.selectCreditcardRadio()
    payobj.enterCardHolderName(donor.firstname)
    payobj.enterCardNumber(donor.cardNumber)
    payobj.enterCardExpiry(donor.cardExpiry)
    payobj.enterCardCVV(donor.cvv)
    payobj.selectgiftId()
    payobj.completeDonation()

    //Confirmation page

    cofobj.confirmationMessage(donor.firstname,donor.amount)
    })
  
  })
})
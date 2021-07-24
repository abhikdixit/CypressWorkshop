class HomePage

{

    ClickWelcomeLink()
    {
        const LButton=cy.get('#welcome')
        LButton.click()
        return this
    }

    ClickLogoutLink()
    {
        const LButton=cy.get("a[href='/index.php/auth/logout")
        LButton.click()
        return this
    }

}
export default HomePage
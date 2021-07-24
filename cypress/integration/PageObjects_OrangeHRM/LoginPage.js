class LoginPage

{
    LaunchURL(url)
    {
        cy.visit(url)
        return this
    }

    EnterUserName(uname)
    {
        const username=cy.get('input#txtUsername')
        username.clear()
        username.type(uname)
        return this
    }

    EnterPassword(upass)
    {
        const pass=cy.get('input#txtPassword')
        pass.clear()
        pass.type(upass)
        return this
    }

    ClickLoginButton()
    {
        const LButton=cy.get('input#btnLogin')
        LButton.click()
        return this
    }

    CaptureErrorMessage()
    {
        const ErrMsg=cy.get('#spanMessage')
        ErrMsg.contains('Invalid credentials')
        return this
    }

}
export default LoginPage
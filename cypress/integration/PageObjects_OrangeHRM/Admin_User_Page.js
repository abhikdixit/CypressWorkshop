class Admin_User_Page
{
    EnterUserName(uname)
    {
        const username=cy.get('#searchSystemUser_userName')
        username.clear()
        username.type(uname)
        return this
    }

    EnterUserRole(utype)
    {
        const usertype=cy.get('#searchSystemUser_userType')
        usertype.clear()
        usertype.select(utype)
        return this
    }

    EnterEmployeeName(ename)
    {
        const empname=cy.get('#searchSystemUser_employeeName_empName')
        empname.clear()
        empname.type(ename)
        return this
    }

    EnterStatus(s)
    {
        const st=cy.get('#searchSystemUser_status')
        st.clear()
        st.select(s)
        return this
    }

    EnterPassword(s)
    {
        const st=cy.get('#systemUser_password')
        st.clear()
        st.select(s)
        return this
    }

    ConfirmPassword(s)
    {
        const st=cy.get('#systemUser_confirmPassword')
        st.clear()
        st.select(s)
        return this
    }

    ClickSearchButton()
    {
        const sButton=cy.get('#searchBtn')
        sButton.click()
        return this
    }

    ClickResetButton()
    {
        const rButton=cy.get('#resetBtn')
        rButton.click()
        return this
    }

}

export default Admin_User_Page

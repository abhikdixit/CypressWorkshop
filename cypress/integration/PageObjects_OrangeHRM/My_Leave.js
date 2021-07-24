class MyLeave
{
    SearchParam_CheckUncheck(param){
        switch (param.toUpperCase()){
            case "ALL":
                cy.get('#leaveList_chkSearchFilter_checkboxgroup_allcheck').click()
                break;
            case "REJECTED":
                cy.get('#leaveList_chkSearchFilter_-1').click()
                break;
            case "CANCELLED":
                cy.get('#leaveList_chkSearchFilter_0').click()
                break;
            case "PENDING APPROVAL":
                cy.get('#leaveList_chkSearchFilter_1').click()
                break;
            case "SCHEDULED":
                cy.get('#leaveList_chkSearchFilter_2').click()
                break;
            case "TAKEN":
                cy.get('#leaveList_chkSearchFilter_3').click()
                break;
        }
    }
    ClickSearch(){
        cy.get('#btnSearch').click();
    }
    ClickReset(){
        cy.get('#btnReset').click();
    }
    WriteFromDate(date){
        const fromdate=cy.get('#calFromDate')
        fromdate.clear()
        fromdate.type(date)
    }

    WriteToDate(date){
        const todate=cy.get('#calToDate')
        todate.clear({force: true})
        todate.type(date)
    }
}
export default MyLeave

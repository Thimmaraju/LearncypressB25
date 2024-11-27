
import logindata from "../../fixtures/login.json"

import jobtitledata from "../../fixtures/admindata/jobtitle.json"

describe("Verify add job title functionality", () => {


    it("Verify adding job title with mandatory fileds", () => {

        cy.login(logindata.username, logindata.password)
        cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click()

        cy.addjobtitle(jobtitledata.jobtilte, jobtitledata.jobdescription)

    })
})
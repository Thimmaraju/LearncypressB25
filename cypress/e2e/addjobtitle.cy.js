
describe("Verify add job title functionality", () => {


    it("Verify adding job title with mandatory fileds", () => {

        cy.visit('/web/index.php/auth/login')

        cy.get('input[name="username"]').type("Admin")

        cy.get('input[name="password"]').type("admin123")

        cy.get('button[type="submit"]').click()

        cy.contains('Time at Work').should("be.visible")

        cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click()

        cy.contains('Job').click()
        cy.contains('Job Titles').click()

        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

        let r = (Math.random() + 1).toString(36).substring(7);

        cy.get('input[class="oxd-input oxd-input--active"]').last().type("Automation Engineer I"+ r)

        cy.get('textarea[placeholder="Type description here"]').type("Automation testing")

        cy.get('button[type="submit"]').click()

        cy.contains("Successfully Saved").should("be.visible")


    })
})
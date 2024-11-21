describe('Verify Login functionality', () => {

  it('Verify the logo', () => {

    cy.visit('/web/index.php/auth/login')

    cy.get('img[alt="company-branding"]').should("be.visible")

  })

  it('Verify login with valid credentials ', () => {
    cy.visit('/web/index.php/auth/login')

    cy.get('input[name="username"]').type("Admin")

    cy.get('input[name="password"]').type("admin123")

    cy.get('button[type="submit"]').click()

    cy.contains('Time at Work').should("be.visible")

    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  })


  it('Verify Login with Valid Username and Invalid password', () => {
    cy.visit('/web/index.php/auth/login')

    cy.get('input[name="username"]').type("Admin")

    cy.get('input[name="password"]').type("tyhrguh")

    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should("be.visible")
  })
  it('Verify Login with InValid Username and valid password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get('input[name="username"]').type("ghuief")

    cy.get('input[name="password"]').type("admin123")

    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should("be.visible")
  })

  it('Verify Login with InValid Username and Invalid password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get('input[name="username"]').type("ghuief")

    cy.get('input[name="password"]').type("fdjgh")

    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should("be.visible")
  })

})
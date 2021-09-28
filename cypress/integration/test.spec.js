///<reference types ='cypress'/>

describe('Login Functionality',()=>{
    beforeEach(()=>{

        cy.visit("/")
     
    })
    
    it('Succesful Login', () =>{
       
        cy.fixture('example').then(function(data){
        
        this.data=data
        cy.login(this.data.username,this.data.password)
        cy.get('h1').contains("Dashboard")
        cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/index.php/dashboard")
        cy.contains("Invalid credentials").should("not.exist")
        
        })
        
    })
    
    it.skip('Unsucessful Login', () =>{
        cy.login('admin','admin')
        cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials")
        cy.contains("Invalid credentials").should("exist")
    })
    
    afterEach(()=>{
        cy.logout()
    })

})

describe('ApplyForLeave',()=>{
    beforeEach(()=>{

        cy.visit("/")
     
    })
    
    it.only('Succesful Levae Application', () =>{
       
        cy.fixture('example').then(function(data){
        
        this.data=data
        cy.login(this.data.username,this.data.password)
        cy.get('h1').contains("Dashboard")
        cy.get('#menu_leave_viewLeaveModule > b').click();
        cy.get('#menu_leave_viewLeaveList').click();
        cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/index.php/leave/viewLeaveList")       
        })
        
    })
    
        
    afterEach(()=>{
        cy.logout()
    })

})

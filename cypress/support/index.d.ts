
declare namespace Cypress {
  interface Chainable<Subject> {

    login(userName:string, password:string):void;
  }
  }
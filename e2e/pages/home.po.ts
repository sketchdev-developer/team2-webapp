import { $, $$ } from 'protractor';

export class Navbar {
  loginLink = $('.navbar .login-link');
  signupLink = $('.navbar .signup-link');
}

export class HomePage {
  url = '/';

  navBar: Navbar = new Navbar();

  introHeader = $('.starter-template h1');
  introText = $('.starter-template p');
}

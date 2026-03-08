export class EcommerceUserBuilder {

  private email: string = "";
  private password: string = "";

  withEmail(email: string): EcommerceUserBuilder {

    this.email = email;

    return this;

  }

  withPassword(password: string): EcommerceUserBuilder {

    this.password = password;

    return this;

  }

  build() {

    return {
      email: this.email,
      password: this.password
    };

  }

}
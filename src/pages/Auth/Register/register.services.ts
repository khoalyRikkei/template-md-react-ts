import { I_User_Register } from "./types";

export default class RegisterServices {
  validate(data: I_User_Register) {
    const error = {
      isError: false,
      emailMsg: "",
      passwordMsg: "",
      nameMsg: "",
    };
    const rexgEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!rexgEmail.test(data.email)) {
      error.isError = true;
      error.emailMsg = "Email is not a valid email";
    }
    if (data.password.length < 5) {
      error.isError = true;
      error.passwordMsg = "Password must be at least 5 characters";
    }
    if (data.name.length < 3 || data.name.length > 20) {
      error.isError = true;
      error.nameMsg =
        "Name must be at least 3 characters and at least 20 characters";
    }
    return error;
  }
  register() {
    
  }
}

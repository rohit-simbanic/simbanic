import * as Yup from "yup";

export const submitSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z ]*$/, "Only characters are allowed")
    .min(2)
    .max(25)
    .required("Please enter your name"),
  company: Yup.string()
    .min(5)
    .max(25)
    .required("Please enter your company name"),
  email: Yup.string().email().required("Please enter your email"),
  phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required("A phone number is required"),
  message: Yup.string().min(6).required("Please enter your message"),
});

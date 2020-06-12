import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("form okay", () => {
  render(<ContactForm />);

  const firstNameInput = screen.getByLabelText(/first Name/i);
  const lastNameInput = screen.getByLabelText(/last Name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);
  const submitInput = screen.getByTestId(/submit/i);
    
  fireEvent.change(firstNameInput, {target: {value: "Evelyn" }});

  console.log(firstNameInput.value);
  fireEvent.change(lastNameInput, {target: {value: "Nguyen" }});
  fireEvent.change(emailInput, {target: {value: "Eve@gmail.com" }});
  fireEvent.change(messageInput, {target: {value: "Hello" }});
  
  fireEvent.click(submitInput);

const newFname = screen.getByText(/evelyn/i);


  
});
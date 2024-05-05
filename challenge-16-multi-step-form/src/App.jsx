import { useState } from "react";
import "./App.css";
import { UserForm } from "./UserForm";
import FormDetail from "./FormDetail";

function App() {
  const data = [
    {
      id: "name",
      label: "Name",
      inputType: "text",
      buttonName: "Next",
      placeHolder: "Your Name..",
    },
    {
      id: "email",
      label: "email",
      inputType: "email",
      buttonName: "Next",
      placeHolder: "Your email..",
    },
    {
      id: "dob",
      label: "DOB",
      inputType: "date",
      buttonName: "Next",
      placeHolder: "Your password..",
    },
    {
      id: "password",
      label: "password",
      inputType: "password",
      buttonName: "Submit",
      placeHolder: "Your pasword..",
    },
  ];

  const [forms, setForms] = useState(data);
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (index === forms.length - 1) {
      console.log("Forms Submitted");
      setIsFormSubmitted(true);
    } else {
      setIndex((idx) => idx + 1);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setIndex((idx) => idx - 1);
  };

  const handleInputChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    console.log("id", id);
    console.log("Value", value);
    const copyFormData = { ...formData };
    copyFormData[id] = value;
    setFormData(copyFormData);
  };
  console.log("Form Data ->", formData);

  return (
    <div className="App">
      {!isFormSubmitted ? (
        <UserForm
          index={index}
          forms={forms}
          formData={formData}
          handleBack={handleBack}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <FormDetail formData={formData} />
      )}
    </div>
  );
}

export default App;

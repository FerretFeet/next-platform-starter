"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  ChangeEventHandler,
  FormEvent,
  ReactEventHandler,
  useState,
} from "react";
import styles from "./FormConstructor.module.css";
import { redirect } from "next/navigation";

export interface LabelInput {
  formField: string;
  labelText: string;
  inputType: string;
  placeHolder: string;
  value: string;
  changeHandler: ChangeEventHandler;
  required: boolean;
  minimum?: number;
  maximum?: number;
  pattern?: number;
}

export interface CheckboxInput {
  legendText: string;
  formField: string;
  selectOptionsArr: Array<Value_Text>;
  changeHandler: ChangeEventHandler;
  maximum?: number;
}

export interface Value_Text {
  value: string;
  text: string;
}

interface FormState {
  fname: string;
  lname: string;
  phone: string;
  address: string;
  city: string;
  zipcode: string;
  email: string;
  services: string;
  additionalNotes: string;
}

const baseUrl = process.env.NETLIFY_SITE_URL || "https://localhost:5173";

// export async function formAction({ request }) {
//   // REQUIRES WORK
//   //
//   // ###############
//   //
//   // REQUIRES WORK
//   const formData = await request.formData();
//   console.log(baseUrl);
//   const response = await fetch(`${baseUrl}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: new URLSearchParams({
//       "form-name": "estimateForm v1",
//       fname: String(formData.get("fname")),
//       lname: String(formData.get("lname")),
//       phone: String(formData.get("phone")),
//       email: String(formData.get("email")),
//       address: String(formData.get("address")),
//       city: String(formData.get("city")),
//       zipcode: String(formData.get("zipcode")),

//       subject: String(formData.get("services")),
//       additionalNotes: String(formData.get("additionalNotes")),
//     }).toString(),
//   });
//   console.log(response);
//   return redirect("/");
// }

//@ts-expect-error dont wanna google the type
const formAction = (e) => {
  e.preventDefault();

  const myForm = e.target;
  const formData = new FormData(myForm);

  fetch("/quoteform.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //@ts-expect-error dont wanna worry about it
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};

// Allows for easier creation of form inputs
export default function FormConstructor() {
  // Form Inputs created from formCheckBoxFields and formTextFields
  // FormState, formAction(), and useState all must match whatever inputs you want to create.
  // Modify this function's return statement to change form rendering.

  const [state, setState] = useState<FormState>({
    fname: "",
    lname: "",

    phone: "",
    email: "",
    address: "",
    city: "",
    zipcode: "",
    services: "",
    additionalNotes: "",
  });

  const formCheckboxFields: CheckboxInput[] = [
    {
      legendText: "Select Interested Services",
      formField: "services",
      selectOptionsArr: [
        { value: "LawnMowing", text: "Lawn Mowing and Edging" },
        { value: "HedgeTreeTrimming", text: "Hedge/Tree Trimming" },
        { value: "Leaf", text: "Leaf Cleanup" },
        { value: "BedMaintenance", text: "Flower Bed Maintenance" },
        { value: "PetWaste", text: "Pet Waste Cleanup" },
      ],
      changeHandler: onChangeHandler,
    },
  ];

  const formTextFields: LabelInput[] = [
    {
      formField: "fname",
      labelText: "First Name",
      inputType: "text",
      placeHolder: "First Name",
      maximum: 32,
      value: state.fname,
      changeHandler: onChangeHandler,
      required: true,
    },
    {
      formField: "lname",
      labelText: "Last Name",
      inputType: "text",
      placeHolder: "Last Name",
      maximum: 32,
      value: state.lname,
      changeHandler: onChangeHandler,
      required: true,
    },
    {
      formField: "phone",
      labelText: "Phone Number",
      inputType: "tel",
      placeHolder: "555-123-4567",
      maximum: 15,
      minimum: 10,
      value: state.phone,
      changeHandler: onChangeHandler,
      required: true,
    },
    {
      formField: "email",
      labelText: "Email Address",
      inputType: "email",
      placeHolder: "yourname@email.com",
      maximum: 120,
      value: state.email,
      changeHandler: onChangeHandler,
      required: true,
    },
    {
      formField: "address",
      labelText: "Address",
      inputType: "text",
      placeHolder: "123 Elm St.",
      maximum: 120,
      value: state.address,
      changeHandler: onChangeHandler,
      required: true,
    },
    {
      formField: "city",
      labelText: "City",
      inputType: "text",
      placeHolder: "",
      maximum: 120,
      value: state.city,
      changeHandler: onChangeHandler,
      required: true,
    },
    {
      formField: "zipcode",
      labelText: "Zipcode",
      inputType: "text",
      placeHolder: "",
      minimum: 5,
      maximum: 12,
      value: state.zipcode,
      changeHandler: onChangeHandler,
      required: true,
    },
    {
      formField: "additionalNotes",
      labelText: "Additional Notes",
      inputType: "textarea",
      placeHolder: "Enter Additional Notes or Questions",
      maximum: 1000,
      value: state.additionalNotes,
      changeHandler: onChangeHandler,
      required: false,
    },
  ];

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value }: { name: string; value: string } = event.target;
    console.log(value);
    console.log(name);

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function createLabelInput({
    formField,
    labelText,
    inputType,
    placeHolder,
    value,
    changeHandler,
    required,
  }: LabelInput) {
    if (inputType == "textarea") {
      return (
        <div className={styles.createdLabelInputCont}>
          <label htmlFor={formField}>{labelText}</label>
          <textarea
            name={formField}
            placeholder={placeHolder}
            value={value}
            onChange={changeHandler}
            required={required}
          />
        </div>
      );
    }
    return (
      <div className={styles.createdLabelInputCont}>
        <label htmlFor={formField}>{labelText}</label>
        <input
          type={inputType}
          name={formField}
          placeholder={placeHolder}
          value={value}
          onChange={changeHandler}
          required={required}
        />
      </div>
    );
  }

  function createCheckboxLabelInput({
    legendText,
    formField,
    selectOptionsArr,
    changeHandler,
  }: CheckboxInput) {
    return (
      <div className={styles.createdCheckboxCont}>
        <div className={styles.legendStyler}>
          <legend>{legendText}</legend>
        </div>
        {selectOptionsArr.map((val, idx) => {
          return (
            <div
              className={styles.checkLabelCont}
              key={idx}
            >
              <input
                type="checkbox"
                name={formField}
                value={val.value}
                onChange={changeHandler}
              />
              <label htmlFor={formField}>
                {selectOptionsArr.at(idx)?.text}
              </label>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <section
      id="QuoteForm"
      className={styles.mainCont}
    >
      <h4 className={styles.formTitleTxt}>Get A Free Estimate</h4>
      <form
        name="quoteForm"
        method="POST"
        action="/quoteForm"
        onSubmit={formAction}
        data-netlify="true"
        className={styles.formContainer}
      >
        <input
          type="hidden"
          name="form-name"
          value="quoteForm"
        />
        {createLabelInput(formTextFields[0])}
        {createLabelInput(formTextFields[1])}
        {createLabelInput(formTextFields[2])}
        {createLabelInput(formTextFields[3])}
        {createLabelInput(formTextFields[4])}
        {createLabelInput(formTextFields[5])}
        {createLabelInput(formTextFields[6])}

        {createCheckboxLabelInput(formCheckboxFields[0])}
        {createLabelInput(formTextFields[7])}
        <button
          className={styles.submitButton}
          type="submit"
        >
          <div className="">Submit</div>
        </button>
      </form>
    </section>
  );
}

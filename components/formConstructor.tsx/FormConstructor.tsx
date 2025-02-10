"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEventHandler, useState } from "react"
import styles from "./FormConstructor.module.css"
import { redirect } from "next/navigation";


export interface LabelInput {
    formField: string,
    labelText: string,
    inputType: string,
    placeHolder: string,
    value: string
    changeHandler: ChangeEventHandler;
    required: boolean
}

export interface CheckboxInput {
    legendText: string,
    formField: string, 
    selectOptionsArr: Array<Value_Text>, 
    changeHandler: ChangeEventHandler
}

export interface Value_Text {
    value: string,
    text: string
}

interface FormState {
    name: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
  }

const baseUrl = process.env.NETLIFY_SITE_URL || "https://localhost:5173"


export async function formAction({ request }) {
    // REQUIRES WORK
    // 
    // ###############
    // 
    // REQUIRES WORK
    const formData = await request.formData();
    console.log(baseUrl);
    const response = await fetch(`${baseUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        "form-name": "estimateForm v1",
        fname: String(formData.get("fname")),
        lname: String(formData.get("lname")),
        phone: String(formData.get("phone")),
        email: String(formData.get("email")),
        address: String(formData.get("address")),

        subject: String(formData.get("services")),
        additionalNotes: String(formData.get("additionalNotes")),
      }).toString(),
    });
    console.log(response);
    return redirect("/");
  }

// Allows for easier creation of form inputs
export default function FormConstructor() {
    // Form Inputs created from formCheckBoxFields and formTextFields
    // FormState, formAction(), and useState all must match whatever inputs you want to create.
    // Modify this function's return statement to change form rendering.

    const formCheckboxFields: CheckboxInput[] = [
        {
            legendText: "Select Interested Services",
            formField: 'services', 
            selectOptionsArr: [
                { value: 'LawnMowing', text: 'Lawn Mowing and Edging' },
                { value: 'HedgeTreeTrimming', text: 'Hedge/Tree Trimming' },
                { value: 'Leaf', text: 'Leaf Cleanup' },
                { value: 'BedMaintenance', text: 'Flower Bed Maintenance' },
                { value: 'PetWaste', text: 'Pet Waste Cleanup' },
            ],
            changeHandler: onChangeHandler
        },
    ];

    const formTextFields: LabelInput[] = [
        {
          formField: 'fname',
          labelText: 'First Name',
          inputType: 'text',
          placeHolder: 'First Name',
          value: '', 
          changeHandler: onChangeHandler,
          required: true,
        },
        {
          formField: 'lname',
          labelText: 'Last Name',
          inputType: 'text',
          placeHolder: 'Last Name',
          value: '', 
          changeHandler: onChangeHandler,
          required: true,
        },
        {
          formField: 'phone',
          labelText: 'Phone Number',
          inputType: 'tel',
          placeHolder: '555-123-4567',
          value: '', 
          changeHandler: onChangeHandler,
          required: true,
        },
        {
          formField: 'email',
          labelText: 'Email Address',
          inputType: 'email',
          placeHolder: 'yourname@email.com',
          value: '', 
          changeHandler: onChangeHandler,
          required: true,
        },
        {
          formField: 'address',
          labelText: 'Address',
          inputType: 'text',
          placeHolder: '123 Elm St.',
          value: '', 
          changeHandler: onChangeHandler,
          required: true,
        },
        {
          formField: 'additionalNotes',
          labelText: 'Additional Notes',
          inputType: 'textarea',
          placeHolder: 'Enter Additional Notes or Questions',
          value: '', 
          changeHandler: onChangeHandler,
          required: false,
        },
      ];

    const [state, setState] = useState<FormState>({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
    });

    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value }: {name:string, value:string} = event.target
        console.log(value)
        setState((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }


  
    function createLabelInput({formField, labelText, inputType, placeHolder, value, changeHandler, required}: LabelInput) { 
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
            )
        }
        return (
            <div className={styles.createdLabelInputCont}>
                <label htmlFor={formField}>{labelText}</label>
                <input type={inputType}
                    name={formField}
                    placeholder={placeHolder}
                    value={value}
                    onChange={changeHandler}
                    required={required}
                />
            </div>
        )
    }



    function createCheckboxLabelInput({legendText, formField, selectOptionsArr, changeHandler}: CheckboxInput) {
        return (
            <div className={styles.createdCheckboxCont}>
                <div className={styles.legendStyler}>
                <legend>{legendText}</legend>
                    </div>
                {selectOptionsArr.map((val, idx) => {
                    return (
                        <div className={styles.checkLabelCont} key={idx}>
                            <input
                            type="checkbox"
                            name={formField}
                            value={val.value}
                            onChange={changeHandler}
                            />
                            <label htmlFor={formField}>{selectOptionsArr.at(idx)?.text}</label>
                        </div>


                    )
                })}
            </div>
        )
    }


    return (
        <div className={styles.mainCont}>
            <h4 className={styles.formTitleTxt}>Get A Free Estimate</h4>
            <form 
            name="estimate-form"
            method="POST"
            data-netlify='true'

            // action="/"
            className={styles.formContainer}>
                {createLabelInput(formTextFields[0])}
                {createLabelInput(formTextFields[1])}
                {createLabelInput(formTextFields[2])}
                {createLabelInput(formTextFields[3])}
                {createLabelInput(formTextFields[4])}
                {createCheckboxLabelInput(formCheckboxFields[0])}
                {createLabelInput(formTextFields[5])}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
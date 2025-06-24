import React, { useEffect, useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default function AccountOpeningForm() {
  useEffect(() => {
    document.title = "Account Opening Form - Personal";
    const savedData = localStorage.getItem("urbankFormData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    middleName: "",
    surname: "",
    mothersMaidenName: "",
    gender: "",
    dateOfBirth: "",
    maritalStatus: "",
    nationality: "",
    stateOfOrigin: "",
    lgaOfOrigin: "",
    houseNumber: "",
    streetName: "",
    city: "",
    residentialLGA: "",
    residentialState: "",
    phone: "",
    email: "",
    idType: "",
    idNumber: "",
    idIssueDate: "",
    idExpiryDate: "",
    bvn: "",
    nin: "",
    tin: "",
    employmentStatus: "",
    employerName: "",
    employerAddress: "",
    annualIncome: "",
    nokFirstName: "",
    nokMiddleName: "",
    nokSurname: "",
    nokGender: "",
    nokDOB: "",
    nokRelationship: "",
    nokPhone: "",
    nokEmail: "",
    nokAddress: "",
    accountType: "",
    cardType: "",
    electronicBanking: [],
    alertPreference: [],
    mandateFirstName: "",
    mandateMiddleName: "",
    mandateSurname: "",
    mandateIdType: "",
    mandateIdNumber: "",
    mandatePhone: "",
    mandateSignature: null,
    mandateDate: "",
    declarationName: "",
    declarationSignature: null,
    declarationDate: "",
    passportPhoto: null,
    uploadedIdFile: null,
    utilityBill: null,
  });

  const [dob, setDob] = useState(null);
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(0);

  useEffect(() => {
    localStorage.setItem("urbankFormData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      const file = files[0];
      const maxSize = 2 * 1024 * 1024; //2mb

      if (file) {
        if (file.size > maxSize) {
          setErrors((prev) => ({
            ...prev,
            [name]: "File size must not exceed 2MB.",
          }));
          return;
        }

        setErrors((prev) => ({ ...prev, [name]: "" })); // clear error
        setFormData((prev) => ({ ...prev, [name]: file }));
      }
    } else if (type === "checkbox" && name === "electronicBanking") {
      setFormData((prev) => ({
        ...prev,
        electronicBanking: checked
          ? [...prev.electronicBanking, value]
          : prev.electronicBanking.filter((item) => item !== value),
      }));
    } else if (type === "checkbox" && name === "alertPreference") {
      setFormData((prev) => ({
        ...prev,
        alertPreference: checked
          ? [...prev.alertPreference, value]
          : prev.alertPreference.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.surname) newErrors.surname = "Surname is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = "Date of Birth is required";
    const phoneRegex = /^(\+234|0)[789][01]\d{8}$/;

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid Nigerian phone number";
    }
    if (!formData.idType) newErrors.idType = "Select an ID type";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const data = new FormData();

      for (const key in formData) {
        if (
          formData[key] instanceof File ||
          typeof formData[key] === "string"
        ) {
          data.append(key, formData[key]);
        } else if (Array.isArray(formData[key])) {
          formData[key].forEach((item, index) => {
            data.append(`${key}[${index}]`, item);
          });
        } else {
          data.append(key, formData[key]);
        }
      }

      try {
        const res = await axios.post("https://urbankbe.nhsurulere.site/account/open", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert("Form submitted successfully!");
        console.log(res.data);
      } catch (err) {
        console.error(
          " Submission Error:",
          err.response?.data || err.message
        );
        alert("Something went wrong while submitting the form.");
      }
    }
  };

  const handleDownloadPDF = async () => {
    window.print();
    const element = formRef.current;
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgProps = pdf.getImageProperties(imgData);
    const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("URBank_Account_Opening_Form.pdf");
  };

  const inputClass =
    "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600";

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // ✅ file is defined here
    if (file && file instanceof Blob) {
      const previewUrl = URL.createObjectURL(file);
      setPreviewUrl(previewUrl);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="max-w-6xl mx-auto mb-24 mt-24 px-4 pb-4 md:pt-4 md:px-8 md:pb-8 space-y-10 bg-white print:bg-white print:p-6 shadow-lg rounded-xl text-sm print:text-black"
      >
        <h2 className="text-3xl pt-16 font-bold text-center">
          URBank Account Opening Form
        </h2>

        {/* PERSONAL INFORMATION */}
        <section>
          <h3 className="text-xl font-semibold mb-4">
            1. Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="title"
              className={inputClass}
              onChange={handleChange}
              //required
            >
              <option value="">Select Title</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Ms">Ms</option>
              <option value="Dr">Dr</option>
              <option value="Prof">Prof</option>
              <option value="Chief">Chief</option>
            </select>

            <input
              name="firstName"
              placeholder="First Name"
              className={inputClass}
              onChange={handleChange}
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">{errors.firstName}</span>
            )}
            <input
              name="middleName"
              placeholder="Middle Name"
              className={inputClass}
              onChange={handleChange}
            />

            <input
              name="surname"
              placeholder="Surname"
              className={inputClass}
              onChange={handleChange}
            />
            {errors.surname && (
              <span className="text-red-500">{errors.surnmae}</span>
            )}
            <input
              name="mothersMaidenName"
              placeholder="Mother's Maiden Name"
              className={inputClass}
              onChange={handleChange}
              //required
            />
            <select
              name="gender"
              className={inputClass}
              onChange={handleChange}
              //required
            >
              <option value="">Select Gender</option>
              <option value="F">Female</option>
              <option value="M">Male</option>
            </select>
            <DatePicker
              selected={dob}
              onChange={(date) => {
                setDob(date);
                handleChange({ target: { name: "dateOfBirth", value: date } });
              }}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select Date of Birth"
              className={inputClass}
              //required
            />

            {errors.dateOfBirth && (
              <p className="text-red-500">{errors.dateOfBirth}</p>
            )}
            <select
              name="maritalStatus"
              className={inputClass}
              onChange={handleChange}
              //required
            >
              <option value="">Select Marital Status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
              <option value="separated">Separated</option>
            </select>

            <input
              name="nationality"
              placeholder="Nationality"
              className={inputClass}
              onChange={handleChange}
              //required
            />
            <input
              name="stateOfOrigin"
              placeholder="State of Origin"
              className={inputClass}
              onChange={handleChange}
              //required
            />
            <input
              name="lgaOfOrigin"
              placeholder="LGA of Origin"
              className={inputClass}
              onChange={handleChange}
              //required
            />

            <label className="flex flex-col">
              Upload Passport Photograph
              {formData.passportPhoto && (
                <img
                  src={URL.createObjectURL(formData.passportPhoto)}
                  alt="Passport Preview"
                  className="w-24 h-24 object-cover rounded-full mt-2 border"
                />
              )}
              <input
                type="file"
                name="passportPhoto"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleChange}
                //required
                className="file-input mt-2"
              />
              {errors.passportPhoto && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.passportPhoto}
                </p>
              )}
            </label>

            <label className="flex flex-col">
              Upload Utility Bill
              {formData.declarationSignature && (
                <img
                  src={URL.createObjectURL(formData.utilityBill)}
                  alt="Utility Bill Preview"
                  className="w-32 h-20 object-contain mt-2 border rounded"
                />
              )}
              <input
                type="file"
                name="utilityBill"
                onChange={handleChange}
                accept=".jpg,.jpeg,.png,.pdf"
                //required
                className="file-input mt-2"
              />
              {errors.utilityBill && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.utilityBill}
                </p>
              )}
            </label>
          </div>
        </section>

        {/* CONTACT INFORMATION */}
        <section>
          <h3 className="text-xl font-semibold mb-4">2. Residential Address</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="houseNumber"
              placeholder="House Number"
              className={inputClass}
              onChange={handleChange}
              //required
            />
            <input
              name="streetName"
              placeholder="Street Name"
              className={inputClass}
              onChange={handleChange}
              //required
            />
            <input
              name="city"
              placeholder="City/Town"
              className={inputClass}
              onChange={handleChange}
              //required
            />
            <input
              name="residentialLGA"
              placeholder="LGA"
              className={inputClass}
              onChange={handleChange}
              //required
            />
            <input
              name="residentialState"
              placeholder="State"
              className={inputClass}
              onChange={handleChange}
              //required
            />
            <input
              name="phone"
              placeholder="Phone Number"
              className={inputClass}
              onChange={handleChange}
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            <input
              name="email"
              placeholder="Email Address"
              className={inputClass}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
        </section>

        {/* EMPLOYMENT */}
        <section>
          <h3 className="text-xl font-semibold mb-4">3. Employment Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="employmentStatus"
              className={inputClass}
              onChange={handleChange}
              value={formData.employmentStatus}
              ///required
            >
              <option value="">Select Employment Status</option>
              <option value="Employed">Employed</option>
              <option value="Self-Employed">Self-Employed</option>
              <option value="Unemployed">Unemployed</option>
              <option value="Student">Student</option>
              <option value="Retired">Retired</option>
            </select>

            <input
              name="employerName"
              placeholder="Employer Name"
              className={inputClass}
              onChange={handleChange}
              //required
            />
            <input
              name="employerAddress"
              placeholder="Employer Address"
              className={inputClass}
              onChange={handleChange}
              //required
            />
            <select
              name="annualIncome"
              className={inputClass}
              onChange={handleChange}
              //required
            >
              <option value="">Select Annual Income Range</option>
              <option value="0-50,000">₦0 - ₦50,000</option>
              <option value="51,000-250,000">₦51,000 - ₦250,000</option>
              <option value="251,000-500,000">₦251,000 - ₦500,000</option>
              <option value="501,000-999,999">₦501,000 - ₦999,999</option>
              <option value="1,000,000-4,999,999">
                ₦1,000,000 - ₦4,999,999
              </option>
              <option value="5,000,000-9,999,999">
                ₦5,000,000 - ₦9,999,999
              </option>
              <option value="10,000,000-19,999,999">
                ₦10,000,000 - ₦19,999,999
              </option>
              <option value="20,000,000+">₦20,000,000+</option>
            </select>
          </div>
        </section>

        {/* IDENTIFICATION */}
        <section>
          <h3 className="text-xl font-semibold mb-4">3. Identification</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="idType"
              className={inputClass}
              onChange={handleChange}
            >
              {errors.idType && <p className="text-red-500">{errors.idType}</p>}
              <option value="">Select ID Type</option>
              <option value="national-id">National ID</option>
              <option value="passport">International Passport</option>
              <option value="driver-license">Driver's License</option>
              <option value="others">Others</option>
            </select>

            <input
              name="idNumber"
              placeholder="ID Number"
              className={inputClass}
              onChange={handleChange}
            />

            <DatePicker
              selected={dob}
              onChange={(date) => {
                setDob(date);
                handleChange({ target: { name: "idIssueDate", value: date } });
              }}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select ID Issue Date"
              className={inputClass}
            />

            <DatePicker
              selected={dob}
              onChange={(date) => {
                setDob(date);
                handleChange({ target: { name: "idExpiryDate", value: date } });
              }}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select ID Expiry Date"
              className={inputClass}
            />

            <input
              name="bvn"
              placeholder="BVN"
              className={inputClass}
              onChange={handleChange}
              //required
            />

            <input
              name="nin"
              placeholder="NIN"
              className={inputClass}
              onChange={handleChange}
              //required
            />

            <input
              name="tin"
              placeholder="TIN"
              className={inputClass}
              onChange={handleChange}
            />

            {/* Upload Means of ID */}
            <label className="flex flex-col">
              Upload Means of ID
              {formData.uploadedIdFile && (
                <img
                  src={URL.createObjectURL(formData.uploadedIdFile)}
                  alt="Passport Preview"
                  className="w-24 h-24 object-cover rounded-full mt-2 border"
                />
              )}
              <input
                type="file"
                name="uploadedIdFile"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleChange}
                //required
                className="file-input mt-2"
              />
              {errors.uploadedIdFile && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.uploadedIdFile}
                </p>
              )}
            </label>
          </div>
        </section>

        {/* NEXT OF KIN */}
        <section>
          <h3 className="text-xl font-semibold mb-4">4. Next of Kin</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="nokFirstName"
              placeholder="First Name"
              className={inputClass}
              onChange={handleChange}
              //required
            />
            <input
              name="nokMiddleName"
              placeholder="Middle Name"
              className={inputClass}
              onChange={handleChange}
            />
            <input
              name="nokSurname"
              placeholder="Surname"
              className={inputClass}
              onChange={handleChange}
              //required
            />
            <select
              name="nokGender"
              className={inputClass}
              onChange={handleChange}
              //required
            >
              <option value="">Select Gender</option>
              <option value="F">Female</option>
              <option value="M">Male</option>
            </select>
            <DatePicker
              selected={dob}
              onChange={(date) => {
                setDob(date);
                handleChange({ target: { name: "NokDOB", value: date } });
              }}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select Next of Kin Date of Birth"
              className={inputClass}
              //required
            />
            <input
              name="nokRelationship"
              placeholder="Relationship"
              className={inputClass}
              onChange={handleChange}
              //required
            />
            <input
              name="nokPhone"
              placeholder="Phone"
              className={inputClass}
              onChange={handleChange}
              //required
            />
            <input
              name="nokEmail"
              placeholder="Email Address"
              className={inputClass}
              onChange={handleChange}
            />
            <input
              name="nokAddress"
              placeholder="Address"
              className={inputClass}
              onChange={handleChange}
              //required
            />
          </div>
        </section>

        {/* ACCOUNT PREFERENCES */}
        <section>
          <h3 className="text-xl font-semibold mb-4">5. Account Preferences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="accountType"
              className={inputClass}
              onChange={handleChange}
              //required
            >
              <option value="">Select Account Type</option>
              <option value="savings">Savings</option>
              <option value="current">Current</option>
              <option value="domiciliary">Business</option>
              <option value="student">Student</option>
            </select>
            <select
              name="cardType"
              className={inputClass}
              onChange={handleChange}
              //required
            >
              <option value="">Select Card Type</option>
              <option value="mastercard">MasterCard</option>
              <option value="verve">Verve</option>
              <option value="visa">VISA</option>
            </select>
            <div className="flex flex-col gap-2">
              <label className="font-medium">Electronic Banking Options:</label>
              <label>
                <input
                  type="checkbox"
                  name="electronicBanking"
                  value="online"
                  onChange={handleChange}
                />{" "}
                Online Banking
              </label>
              <label>
                <input
                  type="checkbox"
                  name="electronicBanking"
                  value="mobile"
                  onChange={handleChange}
                />{" "}
                Mobile Banking
              </label>
              <label>
                <input
                  type="checkbox"
                  name="electronicBanking"
                  value="wallet"
                  onChange={handleChange}
                />{" "}
                Mobile Wallet
              </label>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium">Alert Preferences:</label>
              <label>
                <input
                  type="checkbox"
                  name="alertPreference"
                  value="email"
                  onChange={handleChange}
                />{" "}
                Email Alerts
              </label>
              <label>
                <input
                  type="checkbox"
                  name="alertPreference"
                  value="sms"
                  onChange={handleChange}
                />{" "}
                SMS Alerts
              </label>
            </div>
          </div>
        </section>

        {/* MANDATE */}
        <section>
          <h3 className="text-xl font-semibold mb-4">6. Account Mandate</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="mandateFirstName"
              placeholder="First Name"
              className={inputClass}
              onChange={handleChange}
              value={formData.mandateFirstName}
              //required
            />
            <input
              name="mandateMiddleName"
              placeholder="Middle Name"
              className={inputClass}
              onChange={handleChange}
              value={formData.mandateMiddleName}
            />
            <input
              name="mandateSurname"
              placeholder="Surname"
              className={inputClass}
              onChange={handleChange}
              value={formData.mandateSurname}
              //required
            />
            <select
              name="mandateIdType"
              className={inputClass}
              onChange={handleChange}
            >
              {errors.idType && <p className="text-red-500">{errors.idType}</p>}
              <option value="">Select ID Type</option>
              <option value="national-id">National ID</option>
              <option value="passport">International Passport</option>
              <option value="driver-license">Driver's License</option>
              <option value="others">Others</option>
            </select>
            <input
              name="mandateIdNumber"
              placeholder="ID Number"
              className={inputClass}
              onChange={handleChange}
              value={formData.mandateIdNumber}
            />
            <input
              name="mandatePhone"
              placeholder="Phone Number"
              className={inputClass}
              onChange={handleChange}
              value={formData.mandatePhone}
              //required
            />
            <DatePicker
              selected={dob}
              onChange={(date) => {
                setDob(date);
                handleChange({ target: { name: "mandateDate", value: date } });
              }}
              dateFormat="dd/MM/yyyy"
              placeholderText="Mandate Date"
              className={inputClass}
              //required
            />

            <label className="flex flex-col">
              Upload Digital Signature
              {formData.mandateSignature && (
                <img
                  src={URL.createObjectURL(formData.mandateSignature)}
                  alt="Signature Preview"
                  className="w-32 h-20 object-contain mt-2 border rounded"
                />
              )}
              <input
                type="file"
                name="mandateSignature"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleChange}
                //required
                className="file-input mt-2"
              />
              {errors.mandateSignature && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.mandateSignature}
                </p>
              )}
            </label>
          </div>
        </section>

        {/* DECLARATION */}
        <section>
          <h3 className="text-xl font-semibold mb-4">7. Declaration</h3>
          <p className="mb-4">
            I/We hereby apply for the opening of account(s) with{" "}
            <b>Urban Revolution Bank (URBank)</b> . I/We understand that the
            information given herein and the documents supplied are the basis
            for opening such account(s) and I/We therefore warrant that such
            information is correct. I/We further undertake to indemnify the Bank
            for any loss suffered as a result of any false information or error
            in the information provided by the Bank.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="declarationName"
              placeholder="Your Name"
              className={inputClass}
              onChange={handleChange}
              //required
              value={formData.declarationName}
            />

            <DatePicker
              selected={dob}
              onChange={(date) => {
                setDob(date);
                handleChange({
                  target: { name: "declarationDate", value: date },
                });
              }}
              dateFormat="dd/MM/yyyy"
              placeholderText="Declaration Date"
              className={inputClass}
              //required
            />

            <label className="flex flex-col">
              Upload Signature
              {formData.declarationSignature && (
                <img
                  src={URL.createObjectURL(formData.declarationSignature)}
                  alt="Signature Preview"
                  className="w-32 h-20 object-contain mt-2 border rounded"
                />
              )}
              <input
                type="file"
                name="declarationSignature"
                onChange={handleChange}
                accept=".jpg,.jpeg,.png,.pdf"
                //required
                className="file-input mt-2"
              />
              {errors.declarationSignature && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.declarationSignature}
                </p>
              )}
            </label>
          </div>
        </section>

        <div className="text-center space-x-4 print:hidden">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleDownloadPDF}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            Download as PDF
          </button>
        </div>
      </form>
    </>
  );
}

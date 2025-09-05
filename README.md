# FHIR Converter App

Convert CSV/JSON files into [FHIR](https://www.hl7.org/fhir/) format and view/edit patient data stored in a Google Cloud FHIR dataset.  

This project is split into two repos:  

- **Frontend (React + Vercel):** [fhirconverterappfrontend](https://github.com/jushendhillon9/fhirconverterappfrontend)  
- **Backend (Node.js + Google Cloud Healthcare API):** [FhirConverterAppBackEnd](https://github.com/jushendhillon9/FhirConverterAppBackEnd)  

---

## 🚀 Features

- **Secure Login with Google** – authenticate before interacting with healthcare data.  
- **CSV/JSON → FHIR Conversion** – upload files or convert directly from GCS buckets.  
- **Patient Data Viewer** – browse diagnoses, allergies, and prescriptions.  
- **Patient Data Editor** – add new diagnoses, allergies, or prescriptions to a patient record.  
- **Google Cloud Healthcare Integration** – store and query patient FHIR data in your own dataset.  

---

## 🖼️ Screenshots

### Login Page
Sign in with Google to connect to your FHIR dataset.  
<img width="1420" height="769" alt="Screenshot 2025-09-05 at 2 28 53 PM" src="https://github.com/user-attachments/assets/0d5032b5-5534-46bf-beae-dd4ac1ba4807" />

### Convert CSV/JSON to FHIR  
Upload or select from Google Cloud Storage to convert data.  
<img width="1204" height="655" alt="Screenshot 2025-09-05 at 2 29 52 PM" src="https://github.com/user-attachments/assets/8fc950f8-9d15-496d-a16a-9476ade19f2b" />
<img width="1201" height="653" alt="Screenshot 2025-09-05 at 2 30 12 PM" src="https://github.com/user-attachments/assets/4ad1fd17-b151-4350-b862-6cabf5051781" />


### View & Edit Patient Data  
Browse existing allergies/diagnoses and add new ones.  
<img width="1203" height="654" alt="Screenshot 2025-09-05 at 2 30 46 PM" src="https://github.com/user-attachments/assets/d75f19bb-59b3-4001-930c-384e9f58f63a" />
<img width="1201" height="643" alt="Screenshot 2025-09-05 at 2 31 04 PM" src="https://github.com/user-attachments/assets/e0d0899c-f176-48de-863d-a23969be0f19" />

---

## ⚡ Quick Demo

A preconfigured patient is available for demo purposes.  

1. **Go to the Patient Page**  
   - Project ID, Dataset Name, and FHIR Store Name are prefilled in the demo.  
   - Patient ID is also prefilled for convenience.  

2. **Add a Diagnosis or Allergy**  
   - Enter a clinical status, code, and description (for diagnosis) OR type in an allergy (e.g. *Cashew nuts*).  
   - Click **Upload**.  

3. **Refresh the page**  
   - Your newly added entry will appear under the patient’s records.  

👉 Note: You may use your own GCS credentials or please contact me for the blocked out projectID to test on your own machine! Email: jushendhillon@gmail.com

---

### 🧪 Try the Converter Page

You can also test the **CSV/JSON → FHIR conversion** feature using the sample files provided in the repo root:

- Download csvToFhir in repo root and upload on `/convertPage` to see how CSV data is mapped to FHIR.  
- Download jsonToFhir in repo root and upload on `/convertPage` to convert JSON directly into FHIR resources.  

After uploading either file, you’ll see the converted **FHIR Bundle** displayed in the app.

---

## 🛠️ Tech Stack

- **Frontend:** React, React Router, TypeScript, Vercel  
- **Backend:** Node.js, Express, Google Cloud Healthcare API  
- **Database/Storage:** Google Cloud FHIR Store, GCS (for file uploads)  
- **Authentication:** Google OAuth  

---

## 🔒 Usage Policy

This project is for **portfolio/demo purposes only**.  
- The backend restricts creation of new FHIR stores/datasets to prevent abuse and excessive billing.  
- You can only interact with the preconfigured demo patient record.  
- If you want to adapt this for production, you’ll need your own Google Cloud project + Healthcare API setup.  

---

## 📂 Repos

- Frontend: [fhirconverterappfrontend](https://github.com/jushendhillon9/fhirconverterappfrontend)  
- Backend: [FhirConverterAppBackEnd](https://github.com/jushendhillon9/FhirConverterAppBackEnd)  

---

## ✨ About

This project was built to explore how healthcare data can be converted and managed using modern web tools and Google Cloud’s FHIR store. It combines **data conversion**, **secure cloud storage**, and an **intuitive UI** for interacting with patient health records.  

// import Form from "antd/es/form/Form";
import React from "react";
import Footer from "./headerandfooter/Footer";
import Header from "./headerandfooter/Header";
import PetaddForm from "./PetHostel/AddPetForHos";
import Hostels from "./PetHostel/Hostels"; // Adjusted the import path

function PetHostelPage() {
  return (
    <>
      <Header />
      <PetaddForm />
      <Hostels />
      <Footer />
    </>
  );
}

export default PetHostelPage;

import React, { useState } from "react";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';


const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];


  return (
    <div className="tw-grid tw-grid-cols-2 tw-gap-4 tw-p-12">
      <div className="tw-col-span-2 ...">
        <Button
          className="tw-bg-[#e4feb5] tw-text-[#606162] tw-w-28 tw-font-poppins tw-p-0.5 tw-rounded-md ..."
          label="Regresar"
          icon="pi pi-chevron-left"
        />
      </div>
      <div className="tw-flex tw-justify-end tw-items-center tw-col-span-2 ...">
        <Button
          className="tw-bg-[#8125F7] tw-text-[#FFFFFF] tw-w-44 tw-font-poppins tw-p-0.5 tw-rounded-md ..."
          label="Nuevo Producto"
          icon="pi pi-plus"
        />
      </div>
      <div className="tw-font-poppins tw-text-[#555555] tw-font-semibold tw-text-3xl tx-leading-10 ...">
        <h1>Productos</h1>
      </div>
      <div className="...">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText placeholder="Search" />
        </span>
      </div>
      <div className="tw-bg-slate-400 ...">
        <div className="card flex justify-content-center">
          <Dropdown
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            placeholder="Select a City"
            className="w-full md:w-14rem"
          />
        </div>
      </div>
      <div className="...">
        <div className="card flex justify-content-center">
          <Dropdown
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            placeholder="Select a City"
            className="w-full md:w-14rem"
          />
        </div>
      </div>
      <div className="tw-bg-slate-400 tw-col-span-2 ...">07</div>
    </div>
  );
};

export default App;

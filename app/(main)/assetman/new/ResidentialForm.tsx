import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';

const ResidentialForm = () => {
    const [form, setForm] = useState({
        collateralId: '',
        location: '',
        propertyType: '',
        numberOfBedrooms: '',
        numberOfRooms: '',
        squareFootage: '',
        hasGarage: false,
        hasGarden: false,
        area: '',
        yearOfAcquisition: '',
        hasBalcony: false,
        heatingType: '',
        coolingType: '',
        flooringType: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [id]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <>
            <div className="field col-12 md:col-6">
                <label htmlFor="collateralId">Collateral ID</label>
                <InputText id="collateralId" type="number" value={form.collateralId} onChange={handleChange} />
            </div>
            <div className="field col-12 md:col-6">
                <label htmlFor="location">Location</label>
                <InputText id="location" value={form.location} onChange={handleChange} />
            </div>
            <div className="field col-12 md:col-6">
                <label htmlFor="propertyType">Property Type</label>
                <InputText id="propertyType" value={form.propertyType} onChange={handleChange} />
            </div>
            <div className="field col-12 md:col-6">
                <label htmlFor="numberOfBedrooms">Number of Bedrooms</label>
                <InputText id="numberOfBedrooms" type="number" value={form.numberOfBedrooms} onChange={handleChange} />
            </div>
            <div className="field col-12 md:col-6">
                <label htmlFor="numberOfRooms">Number of Rooms</label>
                <InputText id="numberOfRooms" type="number" value={form.numberOfRooms} onChange={handleChange} />
            </div>
            <div className="field col-12 md:col-6">
                <label htmlFor="squareFootage">Square Footage</label>
                <InputText id="squareFootage" type="number" value={form.squareFootage} onChange={handleChange} />
            </div>
            <div className="field col-12 md:col-6">
                <div className="p-field-checkbox">
                    <input id="hasGarage" type="checkbox" checked={form.hasGarage} onChange={handleChange} />
                    <label htmlFor="hasGarage">Has Garage</label>
                </div>
            </div>
            <div className="field col-12 md:col-6">
                <div className="p-field-checkbox">
                    <input id="hasGarden" type="checkbox" checked={form.hasGarden} onChange={handleChange} />
                    <label htmlFor="hasGarden">Has Garden</label>
                </div>
            </div>
            <div className="field col-12 md:col-6">
                <label htmlFor="area">Area</label>
                <InputText id="area" type="number" value={form.area} onChange={handleChange} />
            </div>
            <div className="field col-12 md:col-6">
                <label htmlFor="yearOfAcquisition">Year of Acquisition</label>
                <InputText id="yearOfAcquisition" type="number" value={form.yearOfAcquisition} onChange={handleChange} />
            </div>
            <div className="field col-12 md:col-6">
                <div className="p-field-checkbox">
                    <input id="hasBalcony" type="checkbox" checked={form.hasBalcony} onChange={handleChange} />
                    <label htmlFor="hasBalcony">Has Balcony</label>
                </div>
            </div>
            <div className="field col-12 md:col-6">
                <label htmlFor="heatingType">Heating Type</label>
                <InputText id="heatingType" value={form.heatingType} onChange={handleChange} />
            </div>
            <div className="field col-12 md:col-6">
                <label htmlFor="coolingType">Cooling Type</label>
                <InputText id="coolingType" value={form.coolingType} onChange={handleChange} />
            </div>
            <div className="field col-12 md:col-6">
                <label htmlFor="flooringType">Flooring Type</label>
                <InputText id="flooringType" value={form.flooringType} onChange={handleChange} />
            </div>
        </>
    );
};
export default ResidentialForm;

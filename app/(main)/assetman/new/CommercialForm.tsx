import { InputText } from 'primereact/inputtext';
import React, { useEffect, useMemo, useState } from 'react';

const CommercialForm = () => {
    const [form, setForm] = useState({
        collateralId: '',
        name: '',
        description: '',
        location: '',
        businessType: '',
        squareFootage: '',
        ownershipType: '',
        numberOfFloors: '',
        hasParking: false,
        hasElevator: false,
        yearOfAcquisition: '',
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
                <label htmlFor="name">Name</label>
                <InputText id="name" value={form.name} onChange={handleChange} />
            </div>
            <div className="field col-12 md:col-6">
                <label htmlFor="description">Description</label>
                <InputText id="description" value={form.description} onChange={handleChange} />
            </div>
            <div className="field col-12 md:col-6">
                <label htmlFor="location">Location</label>
                <InputText id="location" value={form.location} onChange={handleChange} />
            </div>
            <div className="field col-12 md:col-6">
                <label htmlFor="businessType">Business Type</label>
                <InputText id="businessType" value={form.businessType} onChange={handleChange} />
            </div>
            <div className="field col-12 md:col-6">
                <label htmlFor="squareFootage">Square Footage</label>
                <InputText id="squareFootage" type="number" value={form.squareFootage} onChange={handleChange} />
            </div>
            <div className="field col-12 md:col-6">
                <label htmlFor="ownershipType">Ownership Type</label>
                <InputText id="ownershipType" value={form.ownershipType} onChange={handleChange} />
            </div>
            <div className="field col-12 md:col-6">
                <label htmlFor="numberOfFloors">Number of Floors</label>
                <InputText id="numberOfFloors" type="number" value={form.numberOfFloors} onChange={handleChange} />
            </div>
            <div className="field col-12 md:col-6">
                <div className="p-field-checkbox">
                    <input id="hasParking" type="checkbox" checked={form.hasParking} onChange={handleChange} />
                    <label htmlFor="hasParking">Has Parking</label>
                </div>
            </div>
            <div className="field col-12 md:col-6">
                <div className="p-field-checkbox">
                    <input id="hasElevator" type="checkbox" checked={form.hasElevator} onChange={handleChange} />
                    <label htmlFor="hasElevator">Has Elevator</label>
                </div>
            </div>
            <div className="field col-12 md:col-6">
                <label htmlFor="yearOfAcquisition">Year of Acquisition</label>
                <InputText id="yearOfAcquisition" type="number" value={form.yearOfAcquisition} onChange={handleChange} />
            </div>
            <div className="field col-12 md:col-6">
                <label htmlFor="flooringType">Flooring Type</label>
                <InputText id="flooringType" value={form.flooringType} onChange={handleChange} />
            </div>
        </>
    );
};

export default CommercialForm;

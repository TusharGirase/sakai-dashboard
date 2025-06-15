import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';

const LandForm = () => {
    const [form, setForm] = useState({
        collateralId: '',
        name: '',
        description: '',
        location: '',
        landType: '',
        area: '',
        zoning: '',
        yearOfAcquisition: '',
        soilType: '',
        topography: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [id]: value
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
                <label htmlFor="landType">Land Type</label>
                <InputText id="landType" value={form.landType} onChange={handleChange} />
            </div>
            <div className="field col-12 md:col-6">
                <label htmlFor="area">Area</label>
                <InputText id="area" type="number" value={form.area} onChange={handleChange} />
            </div>
            <div className="field col-12 md:col-6">
                <label htmlFor="zoning">Zoning</label>
                <InputText id="zoning" value={form.zoning} onChange={handleChange} />
            </div>
            <div className="field col-12 md:col-6">
                <label htmlFor="yearOfAcquisition">Year of Acquisition</label>
                <InputText id="yearOfAcquisition" type="number" value={form.yearOfAcquisition} onChange={handleChange} />
            </div>
            <div className="field col-12 md:col-6">
                <label htmlFor="soilType">Soil Type</label>
                <InputText id="soilType" value={form.soilType} onChange={handleChange} />
            </div>
            <div className="field col-12 md:col-6">
                <label htmlFor="topography">Topography</label>
                <InputText id="topography" value={form.topography} onChange={handleChange} />
            </div>
        </>
    );
};

export default LandForm;

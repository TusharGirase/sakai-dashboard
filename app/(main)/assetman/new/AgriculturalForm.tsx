import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';

const AgriculturalForm = () => {
    const [form, setForm] = useState({
        name: '',
        description: '',
        location: '',
        cropType: '',
        area: '',
        soilType: '',
        hasIrrigationSystem: false,
        hasFencing: false,
        irrigationType: ''
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
                <label htmlFor="cropType">Crop Type</label>
                <InputText id="cropType" value={form.cropType} onChange={handleChange} />
            </div>
            <div className="field col-12 md:col-6">
                <label htmlFor="area">Area (acres/hectares)</label>
                <InputText id="area" type="number" value={form.area} onChange={handleChange} />
            </div>
            <div className="field col-12 md:col-6">
                <label htmlFor="soilType">Soil Type</label>
                <InputText id="soilType" value={form.soilType} onChange={handleChange} />
            </div>
            <div className="field col-12 md:col-6">
                <div className="p-field-checkbox">
                    <input id="hasIrrigationSystem" type="checkbox" checked={form.hasIrrigationSystem} onChange={handleChange} />
                    <label htmlFor="hasIrrigationSystem">Has Irrigation System</label>
                </div>
            </div>
            <div className="field col-12 md:col-6">
                <div className="p-field-checkbox">
                    <input id="hasFencing" type="checkbox" checked={form.hasFencing} onChange={handleChange} />
                    <label htmlFor="hasFencing">Has Fencing</label>
                </div>
            </div>
            <div className="field col-12 md:col-6">
                <label htmlFor="irrigationType">Irrigation Type</label>
                <InputText id="irrigationType" value={form.irrigationType} onChange={handleChange} />
            </div>
        </>
    );
};

export default AgriculturalForm;

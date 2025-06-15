'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import AgriculturalForm from '@/app/(main)/assetman/new/AgriculturalForm';
import CommercialForm from '@/app/(main)/assetman/new/CommercialForm';
import LandForm from '@/app/(main)/assetman/new/LandForm';
import ResidentialForm from '@/app/(main)/assetman/new/ResidentialForm';
import { Button } from 'primereact/button';

interface AssetType {
    name: string;
    code: string;
}

const NewAssetForm = () => {
    const [assetType, setAssetType] = useState<AssetType | null>(null);

    const assetTypes: AssetType[] = useMemo(
        () => [
            { name: 'Agricultural', code: 'Agricultural' },
            { name: 'Commercial', code: 'Commercial' },
            { name: 'Land', code: 'Land' },
            { name: 'Residential', code: 'Residential' }
        ],
        []
    );

    useEffect(() => {
        setAssetType(assetTypes[0]);
    }, [assetTypes]);

    // Helper to render the correct form
    const renderAssetForm = () => {
        switch (assetType?.code) {
            case 'Agricultural':
                return <AgriculturalForm />;
            case 'Commercial':
                return <CommercialForm />;
            case 'Land':
                return <LandForm />;
            case 'Residential':
                return <ResidentialForm />;
            default:
                return null;
        }
    };

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h5>New Asset</h5>
                    <div className="p-fluid formgrid grid">
                        <div className="field col-12 md:col-3">
                            <label htmlFor="state">Type</label>
                            <Dropdown id="state" value={assetType} onChange={(e) => setAssetType(e.value)} options={assetTypes} optionLabel="name" placeholder="Select One" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12">
                <div className="card">
                    <h5>Advanced</h5>
                    <div className="p-fluid formgrid grid">{renderAssetForm()}</div>
                </div>
            </div>

            <div className="col-12">
                <div className="card">
                    <Button label="Register Asset"></Button>
                </div>
            </div>
        </div>
    );
};

export default NewAssetForm;

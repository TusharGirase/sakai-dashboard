'use client';

import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { FileUpload } from 'primereact/fileupload';

const loanTypeOptions = [
    { label: 'Personal Loan', value: 'personal' },
    { label: 'Mortgage', value: 'mortgage' },
    { label: 'Auto Loan', value: 'auto' }
];

const collateralTypeOptions = [
    { label: 'Residential Asset', value: 'residential' },
    { label: 'Agricultural Asset', value: 'agricultural' },
    { label: 'Land Asset', value: 'land' }
];

const repaymentScheduleOptions = [
    { label: 'Monthly', value: 'monthly' },
    { label: 'Quarterly', value: 'quarterly' },
    { label: 'Annually', value: 'annually' }
];

interface FormState {
    applicantName: string;
    applicantEmail: string;
    applicantPhone: string;
    loanAmount: string;
    loanPurpose: string;
    comments: string;
    loanType: string | null;
    collateralType: string | null;
    collateralId: string;
    interestRate: string;
    loanTerm: string;
    repaymentSchedule: string | null;
    branch: string;
    acceptedTerms: boolean;
    documents: File[];
}

const LoanApplicationWizard = () => {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState<FormState>({
        applicantName: '',
        applicantEmail: '',
        applicantPhone: '',
        loanAmount: '',
        loanPurpose: '',
        comments: '',
        loanType: null,
        collateralType: null,
        collateralId: '',
        interestRate: '',
        loanTerm: '',
        repaymentSchedule: null,
        branch: '',
        acceptedTerms: false,
        documents: []
    });
    const [loanApplicationId, setLoanApplicationId] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [id]: value
        }));
    };

    const handleDropdownChange = (id: string, value: string | null) => {
        setForm((prev) => ({
            ...prev,
            [id]: value
        }));
    };

    const handleCheckboxChange = (e: CheckboxChangeEvent) => {
        setForm((prev) => ({
            ...prev,
            acceptedTerms: e.checked ?? false
        }));
    };

    const handleFileUpload = (e: any) => {
        setForm((prev) => ({
            ...prev,
            documents: e.files
        }));
    };

    // Call backend to create new loan application and get ID
    const handleNextStep = async () => {
        setLoading(true);
        setError(null);
        try {
            let response;
            if (loanApplicationId) {
                // Update existing application
                response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/applications/${loanApplicationId}`, {
                    method: 'PUT', // or 'PATCH' depending on your API
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(form)
                });
                if (!response.ok) throw new Error('Failed to update loan application');
            } else {
                // Create new application
                response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/applications`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(form)
                });
                if (!response.ok) throw new Error('Failed to create loan application');
                const data = await response.json();
                setLoanApplicationId(data.applicationId);
            }
            setStep(2);
        } catch (err: any) {
            setError(err.message || 'Error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="col-12">
            <div className="card">
                <h5>
                    New Loan Application
                    {loanApplicationId && <span style={{ marginLeft: 16, color: '#2196F3' }}>(ID: {loanApplicationId})</span>}
                </h5>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                {step === 1 && (
                    <div className="p-fluid formgrid grid">
                        {/* Basic Details */}
                        <div className="field col-12 md:col-6">
                            <label htmlFor="applicantName">Applicant Name</label>
                            <InputText id="applicantName" value={form.applicantName} onChange={handleChange} />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="applicantEmail">Applicant Email</label>
                            <InputText id="applicantEmail" value={form.applicantEmail} onChange={handleChange} />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="applicantPhone">Applicant Phone</label>
                            <InputText id="applicantPhone" value={form.applicantPhone} onChange={handleChange} />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="loanAmount">Loan Amount</label>
                            <InputText id="loanAmount" type="number" value={form.loanAmount} onChange={handleChange} />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="loanPurpose">Loan Purpose</label>
                            <InputText id="loanPurpose" value={form.loanPurpose} onChange={handleChange} />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="comments">Comments</label>
                            <InputText id="comments" value={form.comments} onChange={handleChange} />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="loanType">Loan Type</label>
                            <Dropdown id="loanType" value={form.loanType} options={loanTypeOptions} onChange={(e) => handleDropdownChange('loanType', e.value)} placeholder="Select Loan Type" />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="collateralType">Collateral Type</label>
                            <Dropdown id="collateralType" value={form.collateralType} options={collateralTypeOptions} onChange={(e) => handleDropdownChange('collateralType', e.value)} placeholder="Select Collateral Type" />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="collateralId">Collateral ID</label>
                            <InputText id="collateralId" type="number" value={form.collateralId} onChange={handleChange} />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="interestRate">Interest Rate (%)</label>
                            <InputText id="interestRate" type="number" value={form.interestRate} onChange={handleChange} />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="loanTerm">Loan Term (years)</label>
                            <InputText id="loanTerm" type="number" value={form.loanTerm} onChange={handleChange} />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="repaymentSchedule">Repayment Schedule</label>
                            <Dropdown id="repaymentSchedule" value={form.repaymentSchedule} options={repaymentScheduleOptions} onChange={(e) => handleDropdownChange('repaymentSchedule', e.value)} placeholder="Select Schedule" />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="branch">Branch</label>
                            <InputText id="branch" value={form.branch} onChange={handleChange} />
                        </div>
                        <Button label={loading ? 'Creating...' : 'Next'} onClick={handleNextStep} className="mt-2" disabled={loading} />
                    </div>
                )}
                {step === 2 && (
                    <div>
                        {/* Terms & Conditions */}
                        <div className="field">
                            <h6>Terms and Conditions</h6>
                            <div
                                style={{
                                    maxHeight: 150,
                                    overflowY: 'auto',
                                    border: '1px solid #ccc',
                                    padding: 10,
                                    marginBottom: 10
                                }}
                            >
                                {/* Replace with your actual terms */}
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisi eu velit.</p>
                            </div>
                            <Checkbox inputId="acceptedTerms" checked={form.acceptedTerms} onChange={handleCheckboxChange} />
                            <label htmlFor="acceptedTerms" className="ml-2">
                                I accept the terms and conditions
                            </label>
                        </div>
                        <div className="mt-3">
                            <Button label="Back" onClick={() => setStep(1)} className="mr-2" />
                            <Button label="Next" onClick={() => setStep(3)} disabled={!form.acceptedTerms} />
                        </div>
                    </div>
                )}
                {step === 3 && (
                    <div>
                        {/* Supporting Documents */}
                        <div className="field">
                            <label>Upload Supporting Documents</label>
                            <FileUpload mode="basic" name="documents[]" customUpload auto chooseLabel="Upload" onSelect={handleFileUpload} multiple />
                        </div>
                        <div className="mt-3">
                            <Button label="Back" onClick={() => setStep(2)} className="mr-2" />
                            <Button label="Submit Application" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoanApplicationWizard;

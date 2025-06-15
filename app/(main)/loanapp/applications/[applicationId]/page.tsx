'use client';

import { useEffect, useState } from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { useParams } from 'next/navigation';
import { LoanApplicationEvent } from '@/types/demo';

function LoanAppPage() {
    const params = useParams();
    const applicationId = params.applicationId as string;
    const [data, setData] = useState<LoanApplicationEvent[]>([]);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date
            .toLocaleString('en-US', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            })
            .replace(',', '');
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'PENDING':
                return '#FFC107';
            case 'APPROVED':
                return '#4CAF50';
            case 'DISBURSED':
                return '#2196F3';
            case 'CLOSED':
                return '#607D8B';
            default:
                return '#BDBDBD'; // Default grey
        }
    };

    useEffect(() => {
        console.log('applicationId:', applicationId);
        if (!applicationId) return;
        fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/applications/${applicationId}/status`)
            .then((res) => res.json())
            .then((events) => {
                console.log('Fetched events:', events);
                setData(events);
            });
    }, [applicationId]);

    const loanApplicationEventMarker = (item: LoanApplicationEvent) => (
        <span className="custom-marker shadow-1" style={{ backgroundColor: getStatusColor(item.status) }}>
            <i className="pi pi-check"></i>
        </span>
    );

    const loanAppEventContent = (item: LoanApplicationEvent) => (
        <Card title={item.status} subTitle={formatDate(item.updatedAt)}>
            <p>
                Updated by <strong>{item.updatedBy}</strong>
            </p>
        </Card>
    );

    if (!data || data.length === 0) return <div>Loading...</div>;

    return (
        <div className="col-12">
            <div className="card timeline-demo">
                <h5>Loan Application Events</h5>
                <Timeline value={data} align="alternate" className="customized-timeline" marker={loanApplicationEventMarker} content={loanAppEventContent} />
            </div>
        </div>
    );
}

export default LoanAppPage;

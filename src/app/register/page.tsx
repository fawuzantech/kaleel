// @ts-nocheck
'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Registration from './Registration'
import TwoFactorCode from './twoFactorCode'
import EmailVerification from './emailVerification'
import { Suspense } from 'react';
import { CircularProgress } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const RegisterContent: React.FC = () => {
    const [isClient, setIsClient] = useState(false);
    const registration = useSelector((state: RootState) => state.registration);
    const currentStep = registration?.currentStep || 1;

    useEffect(() => {
        setIsClient(true);
    }, []);

    const renderStep = () => {
        switch(currentStep) {
            case 1:
                return <Registration />;
            case 2:
                return <TwoFactorCode />;
            case 3:
                return <EmailVerification />;
            default:
                return <Registration />;
        }
    };

    if (!isClient) {
        return null;
    }

    return (
        <Suspense fallback={<CircularProgress />}>
            <div className="mb-4" style={{
                margin:"1vmax",
                
            }}>
                <h5 className="mb-3"
                    style={{
                        fontWeight: 'bold',
                        textAlign:'center'
                }}
                >Onboarding</h5>
                <div className="progress mb-2" style={{ height: '1vh', borderRadius: '8em' , margin:"2vmax"}}>
                    <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ 
                            width: `${(currentStep / 3) * 100}%`, 
                            backgroundColor: 'black',
                            transition: 'width 0.3s ease-in-out'
                        }}
                        aria-valuenow={(currentStep / 3) * 100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    ></div>
                </div>
                <small className="text-muted d-block" style={{
                    textAlign:'center',
                }}>Step {currentStep} of 3</small>
            </div>
            {renderStep()}
        </Suspense>
    );
};

const RegisterPage: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Provider store={store}>
            <RegisterContent />
        </Provider>
    );
};

export default RegisterPage;
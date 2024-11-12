// components/Registration.tsx
'use client'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setFirstName,
    setLastName,
    setPhone,
    setEmail,
    setPassword,
    setConfirmPassword,
    nextStep
} from '@/store/reducers/registrationReducer';
import { RootState } from '../../store/store';
import { Button, TextField } from '@mui/material';

const Registration = () => {
    const dispatch = useDispatch();
    const registration = useSelector((state: RootState) => state.registration);
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { firstName, lastName, phone, email, password, confirmPassword, currentStep } = registration;

    const validateForm = () => {
        const newErrors: typeof errors = {
            firstName: firstName ? '' : 'First name is required',
            lastName: lastName ? '' : 'Last name is required',
            phone: /^\+?[\d\s-]{10,}$/.test(phone) ? '' : 'Invalid phone number',
            email: /\S+@\S+\.\S+/.test(email) ? '' : 'Invalid email address',
            password: password.length >= 8 ? '' : 'Password must be at least 8 characters',
            confirmPassword: password === confirmPassword ? '' : 'Passwords do not match'
        };
        setErrors(newErrors);
        return Object.values(newErrors).every(error => error === '');
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            dispatch(nextStep());
        }
    };

    const handleChange = (setter: (value: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setter(e.target.value);
    };

    const renderInput = (label: string, value: string, setter: (value: string) => void, error?: string, type: string = 'text') => (
        <TextField
            fullWidth
            margin="normal"
            label={label}
            value={value}
            onChange={handleChange(setter)}
            error={!!error}
            helperText={error || ' '}
            variant="outlined"
            type={type}
        />
    );

    return (
        <section className="registration container my-5">
            <h3 className="fw-bold mt-4">Create an account</h3>
            <p className="text-muted">
                Your account is protected by 2FA, and all withdrawals are manually reviewed. Please allow up to 48 hours for processing.
            </p>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        {renderInput("First Name", firstName, (val) => dispatch(setFirstName(val)), errors.firstName)}
                    </div>
                    <div className="col-md-6">
                        {renderInput("Last Name", lastName, (val) => dispatch(setLastName(val)), errors.lastName)}
                    </div>
                    <div className="col-12">
                        {renderInput("Phone", phone, (val) => dispatch(setPhone(val)), errors.phone, "tel")}
                    </div>
                    <div className="col-12">
                        {renderInput("Email", email, (val) => dispatch(setEmail(val)), errors.email, "email")}
                    </div>
                    <div className="col-md-6">
                        {renderInput("Password", password, (val) => dispatch(setPassword(val)), errors.password, "password")}
                    </div>
                    <div className="col-md-6">
                        {renderInput("Confirm Password", confirmPassword, (val) => dispatch(setConfirmPassword(val)), errors.confirmPassword, "password")}
                    </div>
                </div>
                <Button
                    type="submit"
                    fullWidth
                    sx={{
                        mt: 3,
                        backgroundColor: 'black',
                        color: 'white',
                        '&:hover': { backgroundColor: 'black' },
                        borderRadius: "2vmax"
                    }}
                >
                    Continue
                </Button>
            </form>
        </section>
    );
};

export default Registration;

'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import axios from 'axios';
import { setTwoFactorCode, setFirstName, setLastName, setPhone, setEmail, setPassword, setConfirmPassword, nextStep, previousStep, setComplete, resetForm } from '@/store/reducers/registrationReducer';
import { TextField, Button, Box, Typography, Container } from '@mui/material';

const TwoFactorCode = () => {
    const [code, setCode] = useState('');
    const [isValid, setIsValid] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();
    const { firstName, lastName, phone, email, password, confirmPassword, twoFactorCode, currentStep, isComplete } = useSelector((state: RootState) => state.registration);

    useEffect(() => {
        setIsValid(code.length === 6 && /^\d+$/.test(code));
    }, [code]);

    const handleSubmit = async () => {
        try {
            if (!isValid) {
                return;
            }

            dispatch(setTwoFactorCode(code));

            if (!process.env.BACKEND_URL) {
                throw new Error('Backend URL is not configured');
            }

            const response = await axios.post(`http://localhost:4000/api/register`, {
                email: email,
                password: password,
                role: "buyer",
                verificationCode: code,
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phone,
                isVerified: false,
                address: ""
            });
           
            console.log(
                response.data
            )

            if (response.data.success) {
                dispatch(nextStep());
            }

        } catch (error: any) {
            console.error('Two-factor verification failed:', error.message);
            alert('Two-factor verification failed. Please try again.');
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {        
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            const prevInput = document.querySelector(`input[name="code-${index - 1}"]`) as HTMLInputElement;
            if (prevInput) {
                prevInput.focus();
                const newCode = code.slice(0, -1);
                setCode(newCode);
            }
        }
    };

    return (
        <Container className="my-5">
            <Box className="text-center">
                <Typography variant="h5" className="fw-bold mb-4">
                    Two-Factor Authentication 
                </Typography>
                <Typography variant="body1" className="text-muted mb-4">
                    Enter the 6-digit code to approve transactions and other important stuff.
                </Typography>
                <Box component="form" className="d-flex flex-column gap-3" onSubmit={(e) => e.preventDefault()}>
                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }} className="mb-3">
                        {[0, 1, 2, 3, 4, 5].map((index) => (
                            <TextField
                                key={index}
                                variant="outlined"
                                value={code[index] || ''}
                                onChange={(e) => {
                                    const newValue = e.target.value.replace(/[^0-9]/g, '')
                                    if (newValue.length <= 1) {
                                        const newCode = code.split('')
                                        newCode[index] = newValue
                                        setCode(newCode.join(''))
                                        if (newValue.length === 1 && index < 5) {
                                            const nextInput = document.querySelector(`input[name="code-${index + 1}"]`) as HTMLInputElement
                                            if (nextInput) nextInput.focus()
                                        }
                                    }
                                }}
                                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(index, e)}
                                onPaste={(e) => {
                                    e.preventDefault();
                                    const pastedData = e.clipboardData.getData('text').replace(/[^0-9]/g, '').slice(0, 6);
                                    setCode(pastedData);
                                }}
                                inputProps={{
                                    maxLength: 1,
                                    pattern: '[0-9]*',
                                    inputMode: 'numeric',
                                    name: `code-${index}`,
                                    style: {
                                        textAlign: 'center',
                                        fontSize: '1.5rem',
                                        width: '3rem',
                                        height: '3rem',
                                        padding: '0'
                                    }
                                }}
                            />
                        ))}
                    </Box>
                    <Button 
                        variant="contained" 
                        onClick={handleSubmit}
                        className="btn w-100"
                        size="large"
                        disabled={!isValid}
                        sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            },
                            '&:active': {
                                backgroundColor: 'black',
                            },
                            '&.Mui-disabled': {
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                color: 'rgba(255, 255, 255, 0.7)'
                            },
                            borderRadius: "2vmax"
                        }}
                    >
                        Verify & Continue
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default TwoFactorCode;

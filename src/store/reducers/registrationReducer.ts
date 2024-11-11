  import { createSlice, PayloadAction } from '@reduxjs/toolkit';

  interface RegistrationState {
      firstName: string;
      lastName: string;
      phone: string;
      email: string;
      password: string;
      confirmPassword: string;
      twoFactorCode: string; // 6 digit code

      currentStep: number;
      isComplete: boolean;
  }

  const initialState: RegistrationState = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
      twoFactorCode: '',

      currentStep: 1,
      isComplete: false
  };

  const registrationSlice = createSlice({
      name: 'registration',
      initialState,
      reducers: {
          setFirstName: (state, action: PayloadAction<string>) => {
              state.firstName = action.payload;
          },
          setLastName: (state, action: PayloadAction<string>) => {
              state.lastName = action.payload;
          },
          setPhone: (state, action: PayloadAction<string>) => {
              state.phone = action.payload;
          },
          setEmail: (state, action: PayloadAction<string>) => {
              state.email = action.payload;
          },
          setPassword: (state, action: PayloadAction<string>) => {
              state.password = action.payload;
          },
          setConfirmPassword: (state, action: PayloadAction<string>) => {
              state.confirmPassword = action.payload;
          },
          setTwoFactorCode: (state, action: PayloadAction<string>) => {
              state.twoFactorCode = action.payload;
          },
          nextStep: (state) => {
              state.currentStep += 1;
          },
          previousStep: (state) => {
              state.currentStep -= 1;
          },
          setComplete: (state) => {
              state.isComplete = true;
          },
          resetForm: () => {
              return initialState;
          }
      }
  });

  export const {
      setFirstName,
      setLastName,
      setPhone,
      setEmail,
      setPassword,
      setConfirmPassword,
      setTwoFactorCode,
      nextStep,
      previousStep,
      setComplete,
      resetForm
  } = registrationSlice.actions;

  export default registrationSlice.reducer;
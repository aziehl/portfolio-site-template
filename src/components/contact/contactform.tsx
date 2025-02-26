'use client';
import * as React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Title, Paper, Space, Button, Group, Box } from '@mantine/core';
import { paperProps, } from '@/lib/constants';
import { GoogleFormProvider, useGoogleForm } from 'react-google-forms-hooks';
import { formValues } from "@/lib/google-form-wrapper";
import { notifications } from '@mantine/notifications';
import { ShortAnswerInput } from "./short-answer-input";
import { LongAnswerInput } from "./long-answer-input";
import { FieldValues } from "react-hook-form";
// Remove comment for retrieving form values, get values of Google form and place in googleForm.ts
// import { googleFormsToJson } from 'react-google-forms-hooks'
// can use both full and shortened form url
// const result = await googleFormsToJson(
//     'https://docs.google.com/forms/d/e/1FAIpQLSd42f8k1B1hE3efOlN3ESaxX8S02PlFPyz_lbdAvnfxCKsWCg/viewform'
// )
// console.log(result.fields)

export interface SendIdProps {
    readonly id: string;
}

type ContactProps = {
    readonly recaptchaURL: string;
}

// Email regex pattern
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Function to validate email in the object
function validateEmail(data: FieldValues, key: number): boolean {
    const email = data[key];
    return emailRegex.test(email);
}

export default function Contact({ recaptchaURL }: ContactProps) {
    const methods = useGoogleForm({ form: formValues });
    const [isRecaptchaVerified, setIsRecaptchaVerified] = React.useState(false);

    // use any here to avoid FieldValues -> FormData conversion
    // eslint-disable-next-line
    const onSubmit = async (data: any) => {
        // Check for valid email, at least
        const isValidEmail = validateEmail(data, 1045781291);

        if (isValidEmail) {
            await methods.submitToGoogleForms(data);
            notifications.show({
                title: 'Submitted!',
                message: 'Thanks for reaching out!',
                position: 'top-center',
                autoClose: 5000,
                color: 'var(--mantine-color-onyx-5)',
            });


        } else {
            notifications.show({
                title: 'Error!!',
                message: 'Please enter a valid email.',
                position: 'top-center',
                autoClose: 3000,
                color: 'var(--mantine-color-onyx-5)',
            });
        }
    }

    return (
        <>
            <Title order={2} fw={700} > Get In Touch</Title>
            <Paper {...paperProps}>
                <GoogleFormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <Box>
                            <ShortAnswerInput id={formValues.fields[0].id} />
                            <Space h="xs" />
                            <ShortAnswerInput id={formValues.fields[1].id} />
                            <Space h="xs" />
                            <LongAnswerInput id={formValues.fields[2].id} />

                            <Space h="xs" />
                            <ReCAPTCHA
                                sitekey={recaptchaURL} // Replace with Google reCAPTCHA site key, ideally move to SSR
                                onChange={(token: string | null) => { setIsRecaptchaVerified(!!token); }}
                            />
                            <Group justify="flex-start" mt="md">
                                <Button disabled={!isRecaptchaVerified} type="submit" color="var(--mantine-color-feldgrau-7)">Submit</Button>
                            </Group>
                        </Box>
                    </form>
                </GoogleFormProvider>
            </Paper>
        </ >
    )
}

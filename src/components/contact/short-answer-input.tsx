'use client';
import * as React from "react";
import { TextInput } from '@mantine/core';
import { useShortAnswerInput } from 'react-google-forms-hooks';
import { SendIdProps } from "./contactform";

export function ShortAnswerInput({ id }: Readonly<SendIdProps>) {
    const { register, label } = useShortAnswerInput(id);

    return (
        <TextInput
            withAsterisk
            label={label}
            placeholder={label}
            id={id}
            key={id}
            {...register()} />


    );
}

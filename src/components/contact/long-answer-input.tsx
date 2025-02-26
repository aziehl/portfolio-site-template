'use client';
import * as React from "react";
import { Textarea } from '@mantine/core';
import { useLongAnswerInput } from 'react-google-forms-hooks';
import { SendIdProps } from "./contactform";

export function LongAnswerInput({ id }: Readonly<SendIdProps>) {
    const { register, label } = useLongAnswerInput(id);

    return (
        <Textarea
            withAsterisk
            label={label}
            placeholder={label}
            id={id}
            key={id}
            {...register()} />


    );
}

import React from 'react';
import { Label } from "~/components/ui/label";
import { Input as InputPrimitive } from "~/components/ui/input";

export type InputProps = {
    label: string;
    helpText?: string;
}

export const Input = ({label, helpText}: InputProps) => {
    const id = React.useId();
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor={id}>{label}</Label>
            <InputPrimitive id={id} />
            {helpText && (
                <p className="text-xs text-muted-foreground">{helpText}</p>
            )}
        </div>
    )
}
import React from 'react';
import { Label } from "~/components/ui/label";
import {
    Select as SelectPrimitive,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "~/components/ui/select"

export type SelectProps = {
    label: string;
    placeholder?: string;
    helpText?: string;
    items: string[]
}

export const Select = ({label, helpText, placeholder, items}: SelectProps) => {
    const id = React.useId();
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor={id}>{label}</Label>
            <SelectPrimitive>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={placeholder}  id={id} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {items.map((item) => {
                            return (
                                <SelectItem value={item} key={item}>{item}</SelectItem>
                            )
                        })}
                    </SelectGroup>
                </SelectContent>
            </SelectPrimitive>
            {helpText && (
                <p className="text-xs text-muted-foreground">{helpText}</p>
            )}
        </div>
    )
}
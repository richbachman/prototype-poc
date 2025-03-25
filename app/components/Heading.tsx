import React from 'react';

export type HeadingProps = {
    children: React.ReactNode;
}

export const Heading = ({children}: HeadingProps) => {
    return (
       <h2 className="text-lg">{children}</h2>
    )
}
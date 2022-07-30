import React, {FC, useState} from "react";

// enum означает перечисление возможных вариантов того что может быть в оъекте(переменной?)
export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    children?: React.ReactNode;
    variant: CardVariant;
}

const Card: FC<CardProps> = ({
        width, 
        height, 
        variant, 
        children,
    }) => {
        const [state, setState] = useState(0);
    return (
        <div style={{width, height, 
            border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
            background: variant === CardVariant.primary ? 'lightgray' : ''
        }}>
            {children}
        </div>
    );
};

export default Card;
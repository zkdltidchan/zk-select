// counter

import { 
    Button,
    Box,
    ButtonProps,
    Text,
    TextProps,
    useColorModeValue,
 } from "@chakra-ui/react";

interface CounterProps {
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

export const Counter: React.FC<CounterProps> = ({ count, onIncrement, onDecrement }) => {
    
    const buttonStyle: ButtonProps = {
        variant: "solid",
        width: "40px",
        height: "30px",
        px: "0px",
        mx: "0px",
        colorScheme: useColorModeValue("blue", "gray"),
    };

    const textStyle: TextProps = {
        bg: "whiteAlpha.900",
        color: "black",
        textAlign: "center",
        variant: "solid",
        width: "40px",
        height: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "none",
        borderBlockEnd: "1px",
        borderBlockStart: "1px",
    };

    return (
        <Box display="flex" >
            <Button {...buttonStyle} onClick={onDecrement} >-</Button>
            <Text {...textStyle}>{count}</Text>
            <Button {...buttonStyle} onClick={onIncrement}>+</Button>
        </Box>
    );
}
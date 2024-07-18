// select

import React, {
    useState,
} from 'react';

import {
    Menu,
    MenuList,
    MenuItem,
    MenuItemProps,
    MenuButton,
    HStack,
    useColorModeValue,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
interface SelecterProps {
    options: string[];
    value: string;
    onChange: (value: string) => void;
    maxH?: string
}

export const Selecter: React.FC<SelecterProps> = ({ options, value, onChange, maxH }) => {
    const [selectedValue, setSelectedValue] = useState(value);
    const border = useColorModeValue("1px solid black", "1px solid white");
    const menuItemStyle: MenuItemProps = {
        color: "black",
        borderRadius: "none",
        _hover: {
            bg: "gray.300",
        },
    };


    const handleChange = (event: React.MouseEvent<HTMLButtonElement>) => {
        const newValue = event.currentTarget.value;
        setSelectedValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    }

    return (
        <Menu autoSelect={false}>
            <MenuButton w="100%" border={border}>
                <HStack justify={"space-between"}>
                    <>{value}</>
                    <ChevronDownIcon />
                </HStack>
            </MenuButton>
            <MenuList maxH={maxH} overflowY="auto">
                {options.map((option) => (
                    <MenuItem
                        bg={selectedValue === option ? "gray.100" : "whiteAlpha.900"}
                        {...menuItemStyle}
                        key={option}
                        value={option}
                        onClick={handleChange}
                    >
                        {option}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

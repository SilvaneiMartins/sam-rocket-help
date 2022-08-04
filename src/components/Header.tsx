import React from 'react'
import { CaretLeft } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'
import { Heading, HStack, IconButton, StyledProps, useTheme } from 'native-base'

type Props = StyledProps & {
    title: string;
}

export const Header = ({ title, ...rest }: Props) => {
    const { colors } = useTheme();
    const { navigate, goBack } = useNavigation();

    const handleGoBack = () => {
        goBack();
    }

    return (
        <HStack
            pb={6}
            pt={3}
            w='full'
            bg='gray.600'
            alignItems='center'
            justifyContent='space-between'
            {...rest}
        >
            <IconButton
                icon={
                    <CaretLeft
                        size={24}
                        color={colors.gray[200]}
                    />
                }
                onPress={handleGoBack}
            />

            <Heading
                ml={-6}
                flex={1}
                fontSize='lg'
                textAlign='center'
                color={colors.gray[100]}
            >
                {title}
            </Heading>
        </HStack>
    )
}

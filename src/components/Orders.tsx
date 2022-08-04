import React from 'react'
import { ClockAfternoon, Hourglass, CircleWavyCheck } from 'phosphor-react-native'
import { Box, Circle, HStack, Text, useTheme, VStack, Pressable, IPressableProps } from 'native-base'

export type OrdersProps = {
    id: string;
    when: string;
    patrimony: string;
    status: 'open' | 'closed';
}

type Props = IPressableProps & {
    data: OrdersProps;
}

export const Orders = ({ data, ...rest }: Props) => {
    const { colors } = useTheme();

    const statusColor = data.status === 'open' ? colors.secondary[700] : colors.green[300];

    return (
        <Pressable {...rest}>
            <HStack
                mb={2}
                rounded='sm'
                bg='gray.600'
                overflow='hidden'
                alignItems='center'
                justifyContent='space-between'
            >
                <Box h='full' w={2} bg={statusColor} />
                <VStack flex={1} my={5} ml={5}>
                    <Text color='white' fontSize='md'>
                        Patrimônio {data.patrimony}
                    </Text>
                    <HStack>
                        <ClockAfternoon
                            size={17}
                            color={colors.gray[300]}
                        />
                        <Text
                            ml={1}
                            fontSize='xs'
                            color='gray.200'
                        >
                            {data.when}
                        </Text>
                    </HStack>
                </VStack>

                <Circle bg='gray.500' h={12} w={12} mr={5} rounded='3xl' >
                    {
                        data.status === 'closed'
                            ? <CircleWavyCheck size={24} color={statusColor} />
                            : <Hourglass size={24} color={statusColor} />
                    }
                </Circle>
            </HStack>
        </Pressable>
    )
}

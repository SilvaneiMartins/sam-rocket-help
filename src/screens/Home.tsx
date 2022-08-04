import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SignOut, ChatTeardropText } from 'phosphor-react-native'
import { VStack, HStack, IconButton, useTheme, Heading, Text, FlatList, Center } from "native-base"

import { Filter } from '../components/Filter'
import { Orders, OrdersProps } from '../components/Orders'
import Logo from '../assets/logo_secondary.svg'
import { Button } from '../components/Button'

export const Home = () => {
    const { colors } = useTheme();
    const { navigate } = useNavigation();

    const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open');
    const [orders, setOrders] = useState<OrdersProps[]>([
        {
            id: '1',
            status: 'open',
            patrimony: '123456',
            when: '19/07/2022 ás 11:00',
        }
    ]);

    const handleNewOrder = () => {
        navigate('Register');
    }

    const handleOpenDetails = (orderId: string) => {
        navigate('Details', { orderId });
    }

    return (
        <VStack flex={1} pb={6} bg='gray.700' >
            <HStack
                px={5}
                pb={5}
                pt={12}
                w='full'
                bg='gray.600'
                alignItems='center'
                justifyContent='space-between'
            >
                <Logo />

                <IconButton
                    icon={<SignOut size={26} color={colors.gray[300]} />}
                />
            </HStack>

            <VStack flex={1} px={6} >
                <HStack
                    mt={4}
                    mb={4}
                    w='full'
                    alignItems='center'
                    justifyContent='space-between'
                >
                    <Heading color={colors.gray[100]}>
                        Meus chamados
                    </Heading>
                    <Text color={colors.gray[200]}>3</Text>
                </HStack>

                <HStack space={1.5} mb={4}>
                    <Filter
                        type='open'
                        title='Em andamento'
                        isActive={statusSelected === 'open'}
                        onPress={() => setStatusSelected('open')}
                    />

                    <Filter
                        type='closed'
                        title='Finalizados'
                        isActive={statusSelected === 'closed'}
                        onPress={() => setStatusSelected('closed')}
                    />
                </HStack>

                <FlatList
                    data={orders}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Orders
                            data={item}
                            onPress={() => handleOpenDetails(item.id)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    ListEmptyComponent={() => (
                        <Center mt={10}>
                            <ChatTeardropText color={colors.gray[300]} size={40} />
                            <Text
                                mt={6}
                                fontSize='xl'
                                textAlign='center'
                                color={colors.gray[300]}
                            >
                                Você não possui {`\n`}
                                solicitações {statusSelected === 'open' ? 'em andamento' : 'finalizados'}.
                            </Text>
                        </Center>
                    )}
                />

                <Button
                    onPress={handleNewOrder}
                    title='Nova solicitação'
                />
            </VStack>
        </VStack>
    )
}

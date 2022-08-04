import React from 'react'
import { useRoute } from '@react-navigation/native'
import { VStack } from 'native-base'

import { Header } from '../components/Header'

type RouteParams = {
    orderId: string;
}

export const Details = () => {
    const route = useRoute();
    const { orderId } = route.params as RouteParams;


    return (
        <VStack
            flex={1}
            bg='gray.700'
        >
            <Header title='Detalhes solicitação' pt={10} pl={5} pr={5} />
        </VStack>
    )
}

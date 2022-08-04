import React from 'react'
import { VStack, Text } from 'native-base'

import { Input } from '../components/Input'
import { Header } from '../components/Header'
import { Button } from '../components/Button'

export const Register = () => {

    return (
        <VStack
            p={6}
            flex={1}
            bg='gray.600'
        >
            <Header title='Nova solicitação' />

            <Input
                placeholder='Número do patrimônio'
            />

            <Input
                mt={3}
                flex={1}
                multiline
                textAlignVertical='top'
                placeholder='Descrição do problema'
            />

            <Button
                mt={3}
                title='Cadastrar'
            />
        </VStack>
    )
}

import React, { useState } from 'react'
import { Alert } from 'react-native'

import { Container, TitleInput, InputForm, BtnSubmitForm, TxtSubmitForm } from './styles'
import { ScrollView } from 'react-native-gesture-handler'

export default function Orcamento() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [whatsApp, setWhatsApp] = useState('')
    const [project, setProject] = useState('')

    const addOrcamento = async () => {
        Alert.alert(`${name} - ${email} `)
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Container>
                <TitleInput>Nome</TitleInput>
                <InputForm
                    placeholder="Nome Completo"
                    autoCorrect={false}
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <TitleInput>E-Mail</TitleInput>
                <InputForm
                    placeholder="Digite seu email"
                    autoCorrect={false}
                    value={email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={text => setEmail(text)}
                />
                <TitleInput>Telefone</TitleInput>
                <InputForm
                    placeholder="(xx) xxxx-xxxx"
                    autoCorrect={false}
                    value={phone}
                    keyboardType="integer"
                    onChangeText={text => setPhone(text)}
                />
                <TitleInput>WhatsApp</TitleInput>
                <InputForm
                    placeholder="(xx) xxxxx-xxxx"
                    autoCorrect={false}
                    value={whatsApp}
                    onChangeText={text => setWhatsApp(text)}
                />
                <TitleInput>Projeto</TitleInput>
                <InputForm
                    placeholder="Fale sobre seu Projeto"
                    autoCorrect={false}
                    value={project}
                    onChangeText={text => setProject(text)}
                />
                <BtnSubmitForm onPress={addOrcamento} >
                    <TxtSubmitForm>
                        Cadastrar
                </TxtSubmitForm>
                </BtnSubmitForm>

            </Container>
        </ScrollView>
    )
}
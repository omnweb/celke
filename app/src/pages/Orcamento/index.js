import React, { useState } from 'react'
import { ActivityIndicator, Alert } from 'react-native';

import { Container, TitleInput, InputForm, BtnSubmitForm, TxtSubmitForm, LoadingArea } from './styles';
import { ScrollView } from 'react-native-gesture-handler';

import api from '../../config/api';

export default function Orcamento() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [whatsapp, setWhatsApp] = useState('')
    const [project, setProject] = useState('')
    const [loading, setLoading] = useState(false)

    const addOrcamento = async () => {
        setLoading(true)
        await api.post('/orcamento', { name, email, phone, whatsapp, project }).then(response => {
            Alert.alert("", response.data.message)
            setLoading(false)
        }).catch(err => {
            if (err.response) {
                Alert.alert("", err.response.data.message);
                setLoading(false)
            } else {
                Alert.alert("", "Erro de conexão com a API")
                setLoading(false)
            }
        })
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
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TitleInput>Telefone</TitleInput>
                <InputForm
                    placeholder="(xx) xxxx-xxxx"
                    autoCorrect={false}
                    value={phone}
                    onChangeText={text => setPhone(text)}
                />
                <TitleInput>WhatsApp</TitleInput>
                <InputForm
                    placeholder="(xx) xxxxx-xxxx"
                    autoCorrect={false}
                    value={whatsapp}
                    onChangeText={text => setWhatsApp(text)}
                />
                <TitleInput>Projeto</TitleInput>
                <InputForm
                    placeholder="Fale sobre seu Projeto"
                    autoCorrect={false}
                    value={project}
                    onChangeText={text => setProject(text)}
                />
                <BtnSubmitForm
                    disabled={loading}
                    onPress={addOrcamento}
                >
                    <TxtSubmitForm>
                        Cadastrar
                </TxtSubmitForm>
                </BtnSubmitForm>
                {loading &&
                    <LoadingArea>
                        <ActivityIndicator size="large" color="#B0C4D9" />
                    </LoadingArea>}
            </Container>
        </ScrollView>
    );
}
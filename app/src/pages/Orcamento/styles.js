import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
flex: 1;
padding: 15px;
justify-content: flex-start;
background-Color: #B0C4D9;
`
export const TitleInput = styled.Text`
padding: 1px 0px;
color: #2E4359;
font-size:18px;
`
export const InputForm = styled.TextInput`
    margin: 5px 0px 15px 0px;
    padding: 10px;
    border-color: #2E4359;
    border-width: 1px;
    border-radius:5px;
    font-size:18px;
    color:#2E4359;
    width:100%;
`
export const BtnSubmitForm = styled.TouchableOpacity`
background-Color: #2E4359;
margin-top:15px;
padding:15px;
border-radius:5px;
`
export const TxtSubmitForm = styled.Text`
width:100%;
color: #B0C4D9;
text-align:center;
font-size:18px;
`
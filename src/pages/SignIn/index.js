import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Container, Input, Button, ButtonText, Title } from './styles';
import { signInRequest } from '~/store/modules/user/actions';

export default function SignIn() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(signInRequest('joana@gmail.com', 'joanajoana'));
  }

  return (
    <Container>
      <Title>BOAS VINDAS</Title>
      <Input
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Senha"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="send"
      />
      <Button onPress={handleSubmit}>
        <ButtonText>Entrar</ButtonText>
      </Button>
    </Container>
  );
}

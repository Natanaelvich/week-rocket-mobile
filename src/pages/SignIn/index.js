import React, { useState } from 'react';

import { Container, Input, Button, ButtonText } from './styles';
import { Title } from '~/components/Header/styles';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  function handleSubmit() {}

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
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Senha"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="send"
        onSubmitEditing={handleSubmit}
      />
      <Button>
        <ButtonText>Entrar</ButtonText>
      </Button>
    </Container>
  );
}

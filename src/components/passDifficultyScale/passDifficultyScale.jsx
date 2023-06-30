import { List, Item } from './passDifficultyScale.styled';
import { useEffect, useState } from 'react';

export const PassDifficultyScale = ({ password }) => {
  const [passState, setPassState] = useState('gray');

  const onlyLetters = /^[a-zA-Z]+$/;
  const onlyDigits = /^[0-9]+$/;
  const onlySymbols = /^[!@#$%^&*()_+-=;':"\\|,.<>/?]+$/;
  const lettersSymbols = /^(?=.*[a-zA-Z])(?=.*[\W_]).+$/;
  const lettersDigits = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
  const digitsSymbols = /^(?=.*\d)(?=.*[\W_]).+$/;
  const all = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  const onPasswordChange = password => {
    if (password.length === 0) {
      setPassState('gray');
      return;
    } else if (password.length < 8) {
      setPassState('red');
    } else if (all.test(password)) {
      setPassState('strong');
    } else if (
      digitsSymbols.test(password) ||
      lettersDigits.test(password) ||
      lettersSymbols.test(password)
    ) {
      setPassState('medium');
    } else if (
      onlyLetters.test(password) ||
      onlyDigits.test(password) ||
      onlySymbols.test(password)
    ) {
      setPassState('easy');
    }
  };

  useEffect(() => {
    onPasswordChange(password);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password]);

  return (
    <>
      <List>
        <Item state={passState}></Item>
        <Item state={passState}></Item>
        <Item state={passState}></Item>
      </List>
    </>
  );
};

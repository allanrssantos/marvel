import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import {
  FormContainer,
  StyledForm,
  StyledInput,
  StyledButton,
  CardContainer,
  HeaderText,
} from "../styles/FormStyles";
import { useNavigate } from 'react-router-dom';

interface Keys {
  public: string;
  private: string;
}

const KeyForm: React.FC = () => {
  const [keys, setKeys] = useState<Keys>({
    public: "",
    private: "",
  });

  const navigate = useNavigate(); 
  const [cookies, setCookies] = useCookies(["public", "private"]);

  const handleClick = () => {
    navigate('/personagens');
  };

  const isFormValid = keys.public !== "" && keys.private !== "";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setKeys({
      public: e.currentTarget.public.value,
      private: e.currentTarget.private.value,
    });
  };

  useEffect(() => {
    if (isFormValid) {
      const storedPublic = cookies.public || "";
      const storedPrivate = cookies.private || "";

      if (keys.public !== storedPublic || keys.private !== storedPrivate) {
        setCookies("public", keys.public);
        setCookies("private", keys.private);
      }
    }
  }, [isFormValid, keys, cookies, setCookies]);

  return (
    <CardContainer>
      <HeaderText>Olá, inclua suas chaves.</HeaderText>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            id="public" 
            type="text"
            name="public"
            value={keys.public}
            placeholder="Chave pública"
            required
            onChange={(e) => setKeys({ ...keys, public: e.target.value })}
          />
          <StyledInput
            id="private"
            type="text"
            name="private"
            value={keys.private}
            placeholder="Chave privada"
            required
            onChange={(e) => setKeys({ ...keys, private: e.target.value })}
          />
          <StyledButton onClick={handleClick} type="submit" disabled={!isFormValid}>
            Conectar
          </StyledButton>
        </StyledForm>
      </FormContainer>
    </CardContainer>
  );
};

export default KeyForm;

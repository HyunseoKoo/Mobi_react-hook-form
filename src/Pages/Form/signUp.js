import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchema } from "../../Consts/signUpYup";
import SignUpInput from "./Components/signUpInput";
import PhoneInput from "./Components/phoneInput";

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm(
    { resolver: yupResolver(SignupSchema) }
  );

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    console.log(data);
  };

  return (
    <S.Div>
      <S.Wrap>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <p>회원가입</p>
          <SignUpInput
            label="이메일"
            name="email"
            control={control}
            errors={errors}
            placeholder="test@test.com"
          />
          <SignUpInput
            label="비밀번호"
            name="password"
            control={control}
            errors={errors}
            type="password"
            placeholder="특수문자, 영어, 숫자 포함 6자이상"
          />
          <SignUpInput
            label="비밀번호 확인"
            name="confirmPW"
            control={control}
            errors={errors}
            type="password"
            placeholder="confirmPW"
          />
          <PhoneInput
            label="핸드폰"
            name="phoneNumber"
            control={control}
            errors={errors}
            placeholder="010-0000-0000"
            maxLength="13"
          />
          <SignUpInput
            label="나이"
            name="age"
            control={control}
            errors={errors}
            placeholder="age"
          />
          <BtnWrap>
            <S.Button>회원가입</S.Button>
          </BtnWrap>
        </S.Form>
      </S.Wrap>
    </S.Div>
  );
};

export default SignUpPage;

const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.div`
  width: 60%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Form = styled.form`
  border: 1px solid beige;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 40px 30px;
  max-width: 700px;
  min-width: 600px;
  & > p {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  height: 40px;
  width: 82%;
  border-radius: 10px;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  background: pink;
  color: white;
  font-size: 16px;
  font-weight: 700;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const S = {
  Div,
  Wrap,
  LogoImage,
  Form,
  Button,
};

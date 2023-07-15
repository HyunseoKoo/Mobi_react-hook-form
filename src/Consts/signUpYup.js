import * as yup from "yup";

export const SignupSchema = yup.object().shape({
  email: yup
    .string()
    .required("이메일을 필수로 입력해주세요")
    .matches(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      "email 형식에 맞지 않습니다"
  ),
  password: yup
    .string()
    .required("비밀번호는 필수 입력입니다.")
    .min(6, "최소6자 이상 입력해주세요")
    .max(18, "18자 이내로 입력해주세요")
    .matches(
      /^.*(?=^.{8,18}$)(?=.*d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
      "특수문자, 문자, 숫자를 포함한 형태의 암호를 입력해 주세요"
    ),
  confirmPW: yup
    .string()
    .required("비밀번호를 다시 확인해주세요.")
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
  phoneNumber: yup
    .string()
    .matches(/^\d{3}-\d{4}-\d{4}$/, "올바른 핸드폰 번호 형식이 아닙니다.")
    .required("핸드폰 번호를 입력해주세요."),
  age: yup
    .number()
    .required("나이를 입력해주세요.")
    .min(10, "양심이 있으십니까?")
    .max(100, "100이하 값을 입력해주세요.")
    .typeError("나이는 숫자로 입력해주세요."),
});

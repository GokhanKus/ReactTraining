import * as yup from "yup";

export const registerFormSchemas = yup.object().shape({
    email: yup
        .string()
        .email("Geçerli bir e-posta adresi giriniz")
        .required("E-posta alanı zorunludur"),

    age: yup
        .number()
        .typeError("Yaş alanı sayı olmalıdır")
        .positive("Pozitif bir değer giriniz")
        .integer("Tam sayı giriniz")
        .required("Yaş alanı zorunludur"),

    password: yup
        .string()
        .min(6, "Şifre en az 6 karakter olmalıdır")
        .required("Şifre alanı zorunludur"),

    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Şifreler eşleşmiyor")
        .required("Şifre tekrarı zorunludur"),

    term: yup
        .boolean()
        .oneOf([true], "Lütfen kutucuğu onaylayınız")
});

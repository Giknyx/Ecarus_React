import { Modal } from '../Modal';
import { observer } from 'mobx-react';
import { useStores } from '../../../utils/use-stores-hook';
import { useNavigate } from 'react-router-dom';
import './SignInModal.sass';
import { Button } from '../../ui/buttons/large/Button';
import * as Yup from 'yup';
import { Field, Formik, FormikValues } from 'formik';
import { Icon } from '../../ui/icon/Icon';
import { RegistrationModal } from '../RegistrationModal/RegistrationModal';
import { SignInWithCode } from '../SignInWithCode/SignInWithCode';
import { SignInForPartner } from '../SignInForPartner/SignInForPartner';

export const SignInModal = observer(() => {
  const {
    modalStore: { clearCurrentModal, setCurrentModal },
  } = useStores();

  let router = useNavigate();

  const schemaIn = Yup.object().shape({
    phone: Yup.string()
      .required('Пожалуйста,введите номер телефона')
      .matches(
        /^((8|\+7)[ - ]?)?(\(?\d{3}\)?[ - ]?)?[\d\- ]{7,10}$/g,
        'Неверный формат номера'
      ),
    password: Yup.string()
      .required('Пожалуйста,введите пароль')
      .matches(
        /^(?=.*[0-9])(?=.*[a-z]).{3,10}$/g,
        'Пароль должен содержать строчные латинские  буквы, а также цифру'
      )
      .min(5, 'Минимальная длинна пароля - 5 символа'),
  });

  const onRegistration = () => {
    clearCurrentModal();
    setCurrentModal(RegistrationModal);
  };

  const onSignInWithCode = () => {
    clearCurrentModal();
    setCurrentModal(SignInWithCode);
  };

  const onSignInForPartner = () => {
    clearCurrentModal();
    setCurrentModal(SignInForPartner);
  };

  const onSignIn = (values: FormikValues) => {
    clearCurrentModal();
    router('/profile');
  };

  return (
    <Modal onClose={clearCurrentModal}>
      <Formik
        initialValues={{
          phone: '',
          password: '',
        }}
        onSubmit={(values, isValid) => {
          isValid ? onSignIn(values) : console.log('');
        }}
        validationSchema={schemaIn}
      >
        {({ errors, touched, handleSubmit, values, isValid }) => (
          <div className="elements-wrapper">
            <div className="title-btn-wrapper">
              <h3>Вход</h3>
              <button className="btn-close" onClick={clearCurrentModal}>
                <Icon name="close" height="20" width="20" />
              </button>
            </div>
            <div className="form-wrapper">
              <form onSubmit={handleSubmit}>
                <Field
                  name="phone"
                  placeholder="Телефон"
                  className="sign_in_input"
                />

                {errors.phone && touched.phone ? (
                  <p className="error">{errors.phone}</p>
                ) : null}

                <Field
                  name="password"
                  placeholder="Пароль"
                  className="sign_in_input"
                />

                {errors.password && touched.password ? (
                  <p className="error">{errors.password}</p>
                ) : null}

                <Button title="Войти" background="green" type="submit" />
              </form>
            </div>
            <div className="link-wrapper">
              <button className="btn-as-link" onClick={onSignInWithCode}>
                Войти с помощью кода
              </button>
              <button className="btn-as-link" onClick={onRegistration}>
                Регистрация
              </button>
            </div>
            <Button
              onClick={onSignInForPartner}
              title="Вход для партнеров"
              background="grey"
              type={'button'}
            />
          </div>
        )}
      </Formik>
    </Modal>
  );
});

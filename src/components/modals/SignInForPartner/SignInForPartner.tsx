import { observer } from 'mobx-react';
import { useStores } from '../../../utils/use-stores-hook';
import { SignInModal } from '../SignInModal/SignInModal';
import { Modal } from '../Modal';
import { Field, Form, Formik, FormikValues } from 'formik';
import { Button } from '../../ui/buttons/large/Button';
import { RegistrationModal } from '../RegistrationModal/RegistrationModal';
import { Icon } from '../../ui/icon/Icon';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

export const SignInForPartner = observer(() => {
  const {
    modalStore: { clearCurrentModal, setCurrentModal },
  } = useStores();

  let router = useNavigate();

  const signInScheme = Yup.object().shape({
    password: Yup.string()
      .required('Пожалуйста,введите пароль')
      .matches(
        /^(?=.*[0-9])(?=.*[a-z]).{3,10}$/g,
        'Пароль должен содержать строчные латинские  буквы, а также цифру'
      )
      .min(5, 'Минимальная длинна пароля - 5 символа'),
    email: Yup.string()
      .required('Пожалуйста,введите почту')
      .email('Введите действительную почту'),
  });

  const onIRegistered = () => {
    clearCurrentModal();
    setCurrentModal(SignInModal);
  };

  const onRegistration = () => {
    clearCurrentModal();
    setCurrentModal(RegistrationModal);
  };

  const onSignIn = (values: FormikValues) => {
    clearCurrentModal();
    router('/profile');
  };

  return (
    <Modal onClose={clearCurrentModal}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={signInScheme}
        onSubmit={(values, isValid) => {
          isValid ? onSignIn(values) : console.log('');
        }}
      >
        {({ errors, touched, isValid, handleSubmit }) => (
          <div className="elements-wrapper">
            <div className="title-btn-wrapper">
              <h3>Вход</h3>
              <button className="btn-close" onClick={clearCurrentModal}>
                <Icon name="close" height="20" width="20" />
              </button>
            </div>

            <div className="form-wrapper">
              <Form onSubmit={handleSubmit}>
                <Field name="email" placeholder="Email" />

                {errors.email && touched.email ? (
                  <p className="error">{errors.email}</p>
                ) : null}

                <Field name="password" placeholder="Пароль" />

                {errors.password && touched.password ? (
                  <p className="error">{errors.password}</p>
                ) : null}

                <Button title="Войти" background="green" type={'submit'} />
              </Form>
            </div>

            <div className="link-wrapper">
              <button className="btn-as-link" onClick={onIRegistered}>
                Я уже зарегистрировался(-ась)
              </button>

              <button className="btn-as-link" onClick={onRegistration}>
                Регистрация
              </button>
            </div>
          </div>
        )}
      </Formik>
    </Modal>
  );
});

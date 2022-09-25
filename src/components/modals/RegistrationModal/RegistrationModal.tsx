import { observer } from 'mobx-react';
import { useStores } from '../../../utils/use-stores-hook';
import { Modal } from '../Modal';
import { Field, Formik, FormikValues } from 'formik';
import { Button } from '../../ui/buttons/large/Button';
import * as Yup from 'yup';
import { Icon } from '../../ui/icon/Icon';
import { SignInForPartner } from '../SignInForPartner/SignInForPartner';
import { SignInModal } from '../SignInModal/SignInModal';

export const RegistrationModal = observer(() => {
  const {
    modalStore: { clearCurrentModal, setCurrentModal },
  } = useStores();

  const schema = Yup.object().shape({
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
    phone: Yup.string()
      .required('Пожалуйста,введите номер телефона')
      .matches(
        /^((8|\+7)[ - ]?)?(\(?\d{3}\)?[ - ]?)?[\d\- ]{7,10}$/g,
        'Неверный формат номера'
      ),
    username: Yup.string().required(
      'Пожалуйста,введите наименование организации'
    ),
  });

  const onSignIn = () => {
    clearCurrentModal();
    setCurrentModal(SignInModal);
  };

  const onSignInForPartner = () => {
    clearCurrentModal();
    setCurrentModal(SignInForPartner);
  };

  const onSignUp = (values: FormikValues) => {
    clearCurrentModal();
    setCurrentModal(SignInModal);
  };

  return (
    <Modal onClose={clearCurrentModal}>
      <Formik
        initialValues={{
          username: '',
          phone: '',
          password: '',
          email: '',
        }}
        onSubmit={(values) => {
          onSignUp(values);
        }}
        validationSchema={schema}
      >
        {({ errors, touched, handleSubmit, values }) => (
          <div className="elements-wrapper">
            <div className="title-btn-wrapper">
              <h3>Регистрация</h3>
              <button className="btn-close" onClick={clearCurrentModal}>
                <Icon name="close" height="20" width="20" />
              </button>
            </div>
            <div className="form-wrapper">
              <form onSubmit={handleSubmit}>
                <Field name="username" placeholder="Имя" />
                {errors.username && touched.username ? (
                  <p className="error">{errors.username}</p>
                ) : null}

                <Field name="email" placeholder="Email" />

                {errors.email && touched.email ? (
                  <p className="error">{errors.email}</p>
                ) : null}

                <Field name="phone" placeholder="Телефон" />

                {errors.phone && touched.phone ? (
                  <p className="error">{errors.phone}</p>
                ) : null}

                <Field name="password" placeholder="Пароль" />

                {errors.password && touched.password ? (
                  <p className="error">{errors.password}</p>
                ) : null}

                <Button
                  title="Зарегистрироваться"
                  background="green"
                  type="submit"
                  onClick={() => {
                    console.log(values.email);
                  }}
                />
              </form>
            </div>
            <div className="link-wrapper">
              <button className="btn-as-link" onClick={onSignIn}>
                Я уже зарегистрировался(-ась)
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

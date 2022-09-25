import { observer } from 'mobx-react';
import { Modal } from '../Modal';
import { Field, Form, Formik } from 'formik';
import { Button } from '../../ui/buttons/large/Button';
import { useStores } from '../../../utils/use-stores-hook';
import { SignInModal } from '../SignInModal/SignInModal';
import * as Yup from 'yup';
import { Icon } from '../../ui/icon/Icon';
import { EnterCodeModal } from '../EnterCodeModal/EnterCodeModal';
import { SignInForPartner } from '../SignInForPartner/SignInForPartner';

export const SignInWithCode = observer(() => {
  const {
    modalStore: { clearCurrentModal, setCurrentModal },
  } = useStores();

  const signInScheme = Yup.object().shape({
    phone: Yup.string()
      .required('Пожалуйста,введите номер телефона')
      .matches(
        /^((8|\+7)[ - ]?)?(\(?\d{3}\)?[ - ]?)?[\d\- ]{7,10}$/g,
        'Неверный формат номера'
      ),
  });

  const onIRegistered = () => {
    clearCurrentModal();
    setCurrentModal(SignInModal);
  };

  const onSignInForPartner = () => {
    clearCurrentModal();
    setCurrentModal(SignInForPartner);
  };

  const onToGetTheCode = () => {
    clearCurrentModal();
    setCurrentModal(EnterCodeModal);
  };

  return (
    <Modal onClose={clearCurrentModal}>
      <Formik
        initialValues={{
          phone: '',
        }}
        validationSchema={signInScheme}
        onSubmit={(values, isValid) => {
          isValid ? onToGetTheCode() : console.log('');
        }}
      >
        {({ errors, touched, handleSubmit }) => (
          <div className="elements-wrapper">
            <div className="title-btn-wrapper">
              <h3>Вход или регистрация</h3>
              <button className="btn-close" onClick={clearCurrentModal}>
                <Icon name="close" height="20" width="20" />
              </button>
            </div>

            <div className="form-wrapper">
              <Form onSubmit={handleSubmit}>
                <Field name="phone" placeholder="Телефон" />

                {errors.phone && touched.phone ? (
                  <p className="error">{errors.phone}</p>
                ) : null}
                <Button
                  title="Получить код"
                  background="green"
                  type={'submit'}
                />
              </Form>
            </div>

            <div className="link-wrapper">
              <button className="btn-as-link" onClick={onIRegistered}>
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

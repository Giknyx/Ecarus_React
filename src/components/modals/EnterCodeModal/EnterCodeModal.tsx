import { observer } from 'mobx-react';
import './EnterCodeModal.sass';
import { Field, Form, Formik, FormikValues } from 'formik';
import { Button } from '../../ui/buttons/large/Button';
import { Modal } from '../Modal';
import { useStores } from '../../../utils/use-stores-hook';
import * as Yup from 'yup';
import { Icon } from '../../ui/icon/Icon';
import { SignInForPartner } from '../SignInForPartner/SignInForPartner';
import { useNavigate } from 'react-router-dom';

export const EnterCodeModal = observer(() => {
  const {
    modalStore: { clearCurrentModal, setCurrentModal },
  } = useStores();

  let router = useNavigate();

  const signInScheme = Yup.object().shape({
    code: Yup.string()
      .required('Пожалуйста, введите код')
      .min(4, 'Минимальная длинна кода - 4 символа '),
  });

  const onButtonClick = () => {
    console.log('click');
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
          code: '',
        }}
        validationSchema={signInScheme}
        onSubmit={(values, isValid) => {
          isValid ? onSignIn(values) : console.log('');
        }}
      >
        {({ errors, touched, isValid, handleSubmit }) => (
          <div className="elements-wrapper">
            <div className="title-btn-wrapper">
              <h3>Ввести код</h3>
              <button className="btn-close" onClick={clearCurrentModal}>
                <Icon name="close" height="20" width="20" />
              </button>
            </div>

            <p className="prompt">
              Введите код отправленный вам на телефон <br />
              <span className="number">+7 (917) 888 88 88</span>
            </p>

            <div className="form-wrapper">
              <Form onSubmit={handleSubmit}>
                <Field name="code" placeholder="Код" />
                {errors.code && touched.code ? (
                  <p className="error">{errors.code}</p>
                ) : null}
                <Button title="Отправить" background="green" type={'submit'} />
              </Form>
            </div>

            <div className="link-wrapper">
              <button className="btn-as-link" onClick={onButtonClick}>
                Не получил(-а) код
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

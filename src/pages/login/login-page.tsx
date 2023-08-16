import React, { FormEvent, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../constants/app-route.ts';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions/user-action.ts';
import Header from '../../components/header/header.tsx';

function LoginPage(): React.JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [loginError, setLoginError] = useState<{text: string; isVisible: boolean}>({
    text: 'The entered email is incorrect.',
    isVisible: false
  });
  const [passwordError, setPasswordError] = useState<{text: string; isVisible: boolean}>({
    text: 'The password must contain at least one large letter and number, and contain at least 8 characters.',
    isVisible: false
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      const regPass = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,})/;
      const regEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

      if (!regEmail.test(loginRef.current?.value)) {
        setLoginError({...loginError, isVisible: true});
        setTimeout(() => setLoginError({...loginError, isVisible: false}), 5000);
        return;
      }

      if (!regPass.test(passwordRef.current?.value)) {
        setPasswordError({...passwordError, isVisible: true});
        setTimeout(() => setPasswordError({...passwordError, isVisible: false}), 5000);
        return;
      }

      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
      navigate(AppRoute.Main);
    }
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Authorization</title>
      </Helmet>
      <Header typeView={'withoutNavigation'}/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                {loginError.isVisible && <div style={{color: 'red'}}>{loginError.text}</div>}
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required
                  ref={loginRef}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password"
                  required ref={passwordRef}
                />
                {passwordError.isVisible && <div style={{color: 'red'}}>{passwordError.text}</div>}
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;

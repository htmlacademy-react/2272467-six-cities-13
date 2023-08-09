import React, { FormEvent, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../constants/app-route.ts';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions/user-action.ts';
import Header from '../../components/header/header.tsx';
import { toast } from 'react-toastify';

function LoginPage(): React.JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      const re = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,})/;

      if (!re.test(passwordRef.current?.value)) {
        toast.warn('The password must contain at least one large letter and number, and contain at least 8 characters.');
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

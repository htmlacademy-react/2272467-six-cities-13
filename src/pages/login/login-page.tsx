import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../constants/app-route.ts';
import { Link, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions/user-action.ts';
import Header from '../../components/header/header.tsx';
import { City } from '../../constants/city.ts';
import { setCurrentCity } from '../../store/current-city/current-city-slices.ts';
import { updateEmail, updatePassword } from '../../store/login-form/login-form-slices.ts';
import { getLoginForm } from '../../store/login-form/login-form.selectors.ts';
import { getAuthorizationStatus } from '../../store/user/user-selectors.ts';
import { AuthorizationStatus } from '../../constants/authorization-status.ts';
import { clearFormReview } from '../../store/review-form/review-form-slices.ts';


function LoginPage(): React.JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const loginForm = useAppSelector(getLoginForm);
  const [passwordError, setPasswordError] = useState<{ text: string; isVisible: boolean }>({
    text: 'The password must contain one letter and one digit',
    isVisible: false
  });

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch(updateEmail(e.target.value));
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch(updatePassword(e.target.value));
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginForm.email !== null && loginForm.password !== null) {
      if (/\d/.test(loginForm.password) && /[a-zA-Z]/.test(loginForm.password)) {
        dispatch(loginAction({
          login: loginForm.email,
          password: loginForm.password
        }));
      } else {
        setPasswordError({ ...passwordError, isVisible: true });
        setTimeout(() => setPasswordError({ ...passwordError, isVisible: false }), 5000);
      }
    }
  };

  const citiesList = Object.values(City).map((city) => city);
  const randomIndex = Math.floor(Math.random() * (citiesList.length - 1));
  const randomCity = citiesList[randomIndex];

  const handleLocationClick = () => {
    dispatch(setCurrentCity(randomCity));
  };

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main}/>;
  }

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
                  onChange={handleEmailChange}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password"
                  onChange={handlePasswordChange}
                />
                {passwordError.isVisible && <div style={{ color: 'red' }}>{passwordError.text}</div>}
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link to={AppRoute.Main} className="locations__item-link" onClick={handleLocationClick}>
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;

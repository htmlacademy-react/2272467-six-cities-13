import React, { FormEvent, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../constants/app-route.ts';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions/user-action.ts';
import Header from '../../components/header/header.tsx';
import { City } from '../../constants/city.ts';
import { setCurrentCity } from '../../store/current-city/current-city-slices.ts';


function LoginPage(): React.JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [loginError, setLoginError] = useState<{text: string; isVisible: boolean}>({
    text: 'The entered email is incorrect.',
    isVisible: false
  });
  const [passwordError, setPasswordError] = useState<{text: string; isVisible: boolean}>({
    text: 'The password must contain one letter and one digit',
    isVisible: false
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      const passwordValue = passwordRef.current?.value;
      const regEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

      if (!regEmail.test(loginRef.current?.value)) {
        setLoginError({...loginError, isVisible: true});
        setTimeout(() => setLoginError({...loginError, isVisible: false}), 5000);
        return;
      }

      if (!/\d/.test(passwordValue) && !/[a-zA-Z]/.test(passwordValue)) {
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

  const citiesList = Object.values(City).map((city) => city);
  const randomIndex = Math.floor(Math.random() * (citiesList.length - 1));
  const randomCity = citiesList[randomIndex];

  const handleLocationClick = () => {
    dispatch(setCurrentCity(randomCity));
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

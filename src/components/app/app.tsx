import MainPage from '../pages/main/main-page.tsx';

type AppMainProps = {
  rentOfferCount: number;
}

function App({ rentOfferCount }: AppMainProps): JSX.Element {
  return (
    <MainPage rentOfferCount={rentOfferCount}/>
  );
}

export default App;

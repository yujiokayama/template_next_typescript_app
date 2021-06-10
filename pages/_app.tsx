import '../styles/globals.css';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <RecoilRoot>
        <Component {...pageProps} />;
      </RecoilRoot>
    </div>
  );
};

export default MyApp;

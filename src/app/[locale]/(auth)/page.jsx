import { useTranslations } from 'next-intl';

import HomeProduct from '../_Components/HomeProducts';

function App() {
  const t = useTranslations('HomePage');
  return (
    <main>
      <h2>{t('title')}</h2>
      <div className="home-products-container">
        <HomeProduct
          name="Konica"
          description="Konica Black vintage camera."
          image="https://t.ly/jHeQr"
        />
        <HomeProduct
          name="Nikon"
          description="Nikon Reflex Camera."
          image="https://t.ly/0rWM5"
        />
        <HomeProduct
          name="Canon"
          description="Canon DSLR Camera."
          image="https://t.ly/77r-0"
        />
      </div>
    </main>
  );
}

export default App;

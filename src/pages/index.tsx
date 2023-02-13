import { type NextPage } from 'next';
import Head from 'next/head';
import ProductCard from '@src/components/product-card';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Product Card</title>
        <meta name="description" content="Product Card Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen w-screen flex-col items-center justify-center bg-cream">
        <ProductCard
          image={"image-product"}
          price={{ basePrice: 169.99, promotion: 149.99, currency: 'USD' }}
          copy={{
            copyHeader: 'P   E   R   F   U   M   E',
            copyTitle: 'Gabrielle Essence Eau De Parfum',
            copyBody:
              'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
          }}
          
        />
      </main>
    </>
  );
};

export default Home;

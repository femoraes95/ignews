import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';
import styles from "./home.module.scss";

interface HomeeProps {
  product: {
    priceID: string;
    amount: number
  }
}

export default function Home({ product }: HomeeProps) {
  return (
    <>
      <Head>
        <title>HOME | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications<br />
            <span>from {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceID}/>
        </section>

        <img src="/images/avatar.svg" alt="Gelsl"/>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {

  const price = await stripe.prices.retrieve('price_1JZM65AIeaOhCVESmthDS26q')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100)
  }
  return {
    props: {
      product,
    }
  }
}

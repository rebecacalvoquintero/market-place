import React from 'react';
import products from './products.json';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

interface Price {
  currency: string;
  amount: number;
}
interface Product {
  ud: string;
  name: string;
  display_name: string;
  image: string;
  price: Price;
}

export default function Products() {

  return (
    <Layout>
      <Head>
        <title>Our market place!</title>
      </Head>
      {products.products.map(item => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>Price: {`${item.price.currency} ${item.price.amount}`}</p>
            <p>{item.display_name}</p>
            <Image
              src={item.image} // Route of the image file
              height={144} // Desired size with correct aspect ratio
              width={144} // Desired size with correct aspect ratio
              alt="product image"
            />
          </div>
        )
      })}
    </Layout>
  );
}
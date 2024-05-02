import React from 'react'
import { cookies } from 'next/headers'

// Shopping cart - Components
import {ItemCard} from '@/shopping-cart'
import { products, type Product } from '@/products'

export const metadata = {
  title: 'Carrito de compras',
  description: 'Carrito de compras de la tienda',
}

interface ProductInCart {
  product: Product
  quantity: number
}


//
const getProductCart = (cart: {[key: string]: number}) => {
  const productsInCart: ProductInCart[] = []
  for (const key of Object.keys(cart)) {
    const product = products.find(prod => prod.id === key)
    if (product) {
      productsInCart.push({ product, quantity: cart[key] })
    }
  }

  return productsInCart
}

export default function CartPage() {
  const cookiesHeader = cookies()
  const cart = JSON.parse(cookiesHeader.get('cart')?.value ?? '{}') as {[key: string]: number}


  return (
    <div>
      <h1 className='text-xl font-bold'>Carrito de compras</h1>
      <hr className='mb-2' />
      <div className='flex flex-col w-full gap-3 sm:flex-row'>
        <div className='flex flex-col w-full gap-3 sm:w-8/12'>
          {
            getProductCart(cart).map(product => ( // funcion recibe la cookie realiza un barrido interno de la info y retorna la info al componente
              <ItemCard key={product.product.id} product={product.product} quantity={product.quantity} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

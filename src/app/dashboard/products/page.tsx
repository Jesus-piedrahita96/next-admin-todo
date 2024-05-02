import React from 'react'

// Products --------------------
// Components
import { ProductCard } from '@/products'

// Data
import { products } from '@/products'

//-------------------------------

export const metadata = {
  title: 'productos',
  description: 'prodictos de tienda disponible'
}

export default function ProductsPage() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
      {
        products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))
      }
    </div>
  )
}

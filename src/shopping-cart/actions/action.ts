// cookies-next es al lado del cliente
import { getCookie, hasCookie, setCookie } from "cookies-next";

// obtener las cookies del carrito
export const getCookieCart = (): { [id: string]: number } => {

  if (hasCookie('cart')) { // si existe la cookie cart entra en el if
    // analiza el json y extrae la info de la cookie cart como string o si no regreso un objeto vacio
    const cookieCart = JSON.parse(getCookie('cart') as string ?? {})
    return cookieCart
  }

  return {};
}

// añadir producto al carrito
export const addProductToCart = (id: string) => {
  const cookieCart = getCookieCart()

  if (cookieCart[id]) {
    cookieCart[id] += 1
  } else {
    cookieCart[id] = 1
  }

  setCookie('cart', JSON.stringify(cookieCart))
}

// eliminar productos del carrito
export const deleteProductCart = (id: string) => {
  const cookieCart = getCookieCart()

  // esto es una forma de eliminar un productos de las cookies
  // for (const obj of Object.keys(cookieCart)) {
  //   if (obj === id) {
  //     cookieCart[id] = 0
  //   }
  // }

  delete cookieCart[id]
  setCookie('cart', JSON.stringify(cookieCart))
}

export const deleteOneProduct = (id: string): void => {
  const product = getCookieCart()
  console.log(product);
  if (product[id]) {
    product[id] -= 1
  } else if (product[id] === 0) {
    delete product[id]
  }

  setCookie('cart', JSON.stringify(product))
}
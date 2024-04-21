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

// todo: eliminar las cookies del carrito
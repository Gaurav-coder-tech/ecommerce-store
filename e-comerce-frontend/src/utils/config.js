const devConfig = {
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
}

const prodConfig = {
  baseURL: 'https://ecommerce-store-backend-drzy.onrender.com',
}

export const config = import.meta.env.PROD ? prodConfig : devConfig
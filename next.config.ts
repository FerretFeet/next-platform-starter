import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
    ignoreBuildErrors: true
  }


}
 
export default nextConfig
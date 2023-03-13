import localFont from 'next/font/local'

export const fonts = localFont({
  src: [
    {
      path: "../fonts/NetflixSans_W_Rg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/NetflixSans_W_Bd.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/NetflixSans_W_Md.woff2",
      weight: "500",
      style: "normal",
    }
  ],
})

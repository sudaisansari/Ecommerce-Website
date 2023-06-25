/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.sanity.io"] //url of image
    }
}

module.exports = nextConfig

// const nextConfig = {
//     experiments: {
//       topLevelAwait: true,
//     },
//     images: {
//       domains: ["cdn.sanity.io"], // URL of the image
//     },
//   };
  
//   module.exports = nextConfig;
  

import dynamic from "next/dynamic";

export  const BannerLazy = dynamic(
    () => import('./banner'),
    {suspense: true}
);

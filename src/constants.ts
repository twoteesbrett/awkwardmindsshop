export type Swatch = {
  name: string;
  className: string;
};

export type Product = {
  size: string;
  price: string;
  glbSrc: string;
};

export const SWATCHES: Swatch[] = [
  { name: "Pink", className: "swatch swatch-pink" },
  { name: "Orange", className: "swatch swatch-orange" },
  { name: "Yellow", className: "swatch swatch-yellow" },
  { name: "Green", className: "swatch swatch-green" }
];

export const PRODUCTS: Product[] = [
  { size: "5cm", price: "$5", glbSrc: "/models/liquorice_allsort_box_and_lid_100_v7_pink.glb" },
  { size: "10cm", price: "$15", glbSrc: "/models/liquorice_allsort_box_and_lid_100_v7_orange.glb" },
  { size: "15cm", price: "$30", glbSrc: "/models/liquorice_allsort_box_and_lid_100_v7_yellow.glb" },
  { size: "20cm", price: "$60", glbSrc: "/models/liquorice_allsort_box_and_lid_100_v7_green.glb" }
];

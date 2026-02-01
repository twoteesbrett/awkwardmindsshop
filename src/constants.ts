export type Swatch = {
  name: string;
  className: string;
};

export type Product = {
  size: string;
  scaleFactor: number;
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
  { size: "5cm", scaleFactor: 0.02, price: "$5", glbSrc: "/models/liquorice_allsort_box_and_lid_100_v7_pink.glb" },
  { size: "10cm", scaleFactor: 0.04, price: "$15", glbSrc: "/models/liquorice_allsort_box_and_lid_100_v7_orange.glb" },
  { size: "15cm", scaleFactor: 0.06, price: "$30", glbSrc: "/models/liquorice_allsort_box_and_lid_100_v7_yellow.glb" },
  { size: "20cm", scaleFactor: 0.08, price: "$60", glbSrc: "/models/liquorice_allsort_box_and_lid_100_v7_green.glb" }
];

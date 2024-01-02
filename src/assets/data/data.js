export const getProducts = async () => {
  const resul = await fetch("https://api.escuelajs.co/api/v1/products/");
  const data = await resul.json();
  return data;
};
export const getProductId = async (id) => {
  const resul = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
  const data = await resul.json();
  return data;
};
export const getCategory = async () => {
  const resul = await fetch("https://api.escuelajs.co/api/v1/categories");
  const data = await resul.json();
  return data;
};
export const getfromCategory = async (id) => {
  const resul = await fetch(
    `https://api.escuelajs.co/api/v1/products/?categoryId=${id}`
  );
  const data = await resul.json();
  return data;
};

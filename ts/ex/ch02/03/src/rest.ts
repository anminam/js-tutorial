const address: any = {
  country: "korea",
  city: "seoul",
  address1: "gg",
  address2: "asdklfasd",
};

const { country, city, ...det } = address;

console.log(det);

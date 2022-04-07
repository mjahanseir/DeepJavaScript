
const address= {
    street: '',
    city: '',
    country: '',
}
const street= address.street;
const city= address.city;
const country= address.country;

////////////////////////////////

const { street :st } = address; // =  const st= address.street
const { street,city,country }=address;
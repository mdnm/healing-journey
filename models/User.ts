export default interface User {
  id: string;
  name?: string;
  email?: string;
  image?: string;
  customerId?: string;
  priceId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

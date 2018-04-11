// @flow

export type UserCredentials = {
  username: string,
  pssword: string
};

export type CellarItem = {
  quantity: number,
  price: number,
  purchaseDate: Date,
  purchaseLocation: string,
  wine: string, // ref to MongoDB _id
  storageLocationId: number,
  createdAt: Date,
  updatedAt: Date,
  _id: string
};
export type Cellar = {
  cellarName: string,
  cellarItems: CellarItem[],
  _id: string
};
export type User = {
  email: string,
  firstName: string,
  lastName: string,
  birthday: Date,
  cellars: Cellar[],
  _id: string
};
export type NewUser = {
  email: string,
  password: string,
  passwordConfirm: string,
  firstName: string,
  lastName: string,
  birthday: Date
};

export type Wine = {
  producer: string,
  vintage: string,
  varietal: string,
  domain: string,
  cuvee: string,
  country: string,
  region: string,
  appellation: string,
  color: string,
  _id: string
};

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};

// declare type ActionType = "DO_LOGIN" | "DO_REGISTER";

// declare type ActionT<A: ActionType, P> = {|
//   type: A,
//   payload: P
// |};

// export type Action = ActionT<"DO_LOGIN", UserCredentials> | ActionT<"DO_REGISTER", User>;

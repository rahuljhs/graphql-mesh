// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace PetstoreTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  Float: number;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: bigint;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date | string;
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: string;
  /** The `File` scalar type represents a file upload. */
  File: File;
  ObjMap: any;
};

export type Query = {
  /** Multiple status values can be provided with comma separated strings */
  findPetsByStatus?: Maybe<Array<Maybe<Pet>>>;
  /** Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing. */
  findPetsByTags?: Maybe<Array<Maybe<Pet>>>;
  /** Returns a single pet */
  getPetById?: Maybe<Pet>;
  /** Returns a map of status codes to quantities */
  getInventory?: Maybe<Scalars['JSON']>;
  /** For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions. */
  getOrderById?: Maybe<Order>;
  /** Logs user into the system */
  loginUser?: Maybe<Scalars['String']>;
  /** Logs out current logged in user session */
  logoutUser?: Maybe<Scalars['JSON']>;
  /** Get user by user name */
  getUserByName?: Maybe<User>;
};


export type QueryfindPetsByStatusArgs = {
  status?: InputMaybe<queryInput_findPetsByStatus_status>;
};


export type QueryfindPetsByTagsArgs = {
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerygetPetByIdArgs = {
  petId: Scalars['BigInt'];
};


export type QuerygetOrderByIdArgs = {
  orderId: Scalars['BigInt'];
};


export type QueryloginUserArgs = {
  username?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type QuerygetUserByNameArgs = {
  username: Scalars['String'];
};

export type Pet = {
  id?: Maybe<Scalars['BigInt']>;
  name: Scalars['String'];
  category?: Maybe<Category>;
  photoUrls: Array<Maybe<Scalars['String']>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  status?: Maybe<mutation_updatePet_status>;
};

export type Category = {
  id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
};

export type Tag = {
  id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
};

/** pet status in the store */
export type mutation_updatePet_status =
  | 'available'
  | 'pending'
  | 'sold';

/** Status values that need to be considered for filter */
export type queryInput_findPetsByStatus_status =
  | 'available'
  | 'pending'
  | 'sold';

export type Order = {
  id?: Maybe<Scalars['BigInt']>;
  petId?: Maybe<Scalars['BigInt']>;
  quantity?: Maybe<Scalars['Int']>;
  shipDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<mutation_placeOrder_status>;
  complete?: Maybe<Scalars['Boolean']>;
};

/** Order Status */
export type mutation_placeOrder_status =
  | 'placed'
  | 'approved'
  | 'delivered';

export type User = {
  id?: Maybe<Scalars['BigInt']>;
  username?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['EmailAddress']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  /** User Status */
  userStatus?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  /** Update an existing pet by Id */
  updatePet?: Maybe<Pet>;
  /** Add a new pet to the store */
  addPet?: Maybe<Pet>;
  /** Updates a pet in the store with form data */
  updatePetWithForm?: Maybe<Scalars['JSON']>;
  /** Deletes a pet */
  deletePet?: Maybe<Scalars['JSON']>;
  /** uploads an image */
  uploadFile?: Maybe<ApiResponse>;
  /** Place a new order in the store */
  placeOrder?: Maybe<Order>;
  /** For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors */
  deleteOrder?: Maybe<Scalars['JSON']>;
  /** This can only be done by the logged in user. */
  createUser?: Maybe<User>;
  /** Creates list of users with given input array */
  createUsersWithListInput?: Maybe<User>;
  /** This can only be done by the logged in user. */
  updateUser?: Maybe<Scalars['JSON']>;
  /** This can only be done by the logged in user. */
  deleteUser?: Maybe<Scalars['JSON']>;
};


export type MutationupdatePetArgs = {
  input?: InputMaybe<Pet_Input>;
};


export type MutationaddPetArgs = {
  input?: InputMaybe<Pet_Input>;
};


export type MutationupdatePetWithFormArgs = {
  petId: Scalars['BigInt'];
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};


export type MutationdeletePetArgs = {
  api_key?: InputMaybe<Scalars['String']>;
  petId: Scalars['BigInt'];
};


export type MutationuploadFileArgs = {
  petId: Scalars['BigInt'];
  additionalMetadata?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<Scalars['File']>;
};


export type MutationplaceOrderArgs = {
  input?: InputMaybe<Order_Input>;
};


export type MutationdeleteOrderArgs = {
  orderId: Scalars['BigInt'];
};


export type MutationcreateUserArgs = {
  input?: InputMaybe<User_Input>;
};


export type MutationcreateUsersWithListInputArgs = {
  input?: InputMaybe<Array<InputMaybe<User_Input>>>;
};


export type MutationupdateUserArgs = {
  username: Scalars['String'];
  input?: InputMaybe<User_Input>;
};


export type MutationdeleteUserArgs = {
  username: Scalars['String'];
};

export type Pet_Input = {
  id?: InputMaybe<Scalars['BigInt']>;
  name: Scalars['String'];
  category?: InputMaybe<Category_Input>;
  photoUrls: Array<InputMaybe<Scalars['String']>>;
  tags?: InputMaybe<Array<InputMaybe<Tag_Input>>>;
  status?: InputMaybe<mutation_updatePet_status>;
};

export type Category_Input = {
  id?: InputMaybe<Scalars['BigInt']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Tag_Input = {
  id?: InputMaybe<Scalars['BigInt']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ApiResponse = {
  code?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type Order_Input = {
  id?: InputMaybe<Scalars['BigInt']>;
  petId?: InputMaybe<Scalars['BigInt']>;
  quantity?: InputMaybe<Scalars['Int']>;
  shipDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<mutation_placeOrder_status>;
  complete?: InputMaybe<Scalars['Boolean']>;
};

export type User_Input = {
  id?: InputMaybe<Scalars['BigInt']>;
  username?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['EmailAddress']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  /** User Status */
  userStatus?: InputMaybe<Scalars['Int']>;
};

export type HTTPMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

  export type QuerySdk = {
      /** Multiple status values can be provided with comma separated strings **/
  findPetsByStatus: InContextSdkMethod<Query['findPetsByStatus'], QueryfindPetsByStatusArgs, MeshContext>,
  /** Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing. **/
  findPetsByTags: InContextSdkMethod<Query['findPetsByTags'], QueryfindPetsByTagsArgs, MeshContext>,
  /** Returns a single pet **/
  getPetById: InContextSdkMethod<Query['getPetById'], QuerygetPetByIdArgs, MeshContext>,
  /** Returns a map of status codes to quantities **/
  getInventory: InContextSdkMethod<Query['getInventory'], {}, MeshContext>,
  /** For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions. **/
  getOrderById: InContextSdkMethod<Query['getOrderById'], QuerygetOrderByIdArgs, MeshContext>,
  /** Logs user into the system **/
  loginUser: InContextSdkMethod<Query['loginUser'], QueryloginUserArgs, MeshContext>,
  /** Logs out current logged in user session **/
  logoutUser: InContextSdkMethod<Query['logoutUser'], {}, MeshContext>,
  /** Get user by user name **/
  getUserByName: InContextSdkMethod<Query['getUserByName'], QuerygetUserByNameArgs, MeshContext>
  };

  export type MutationSdk = {
      /** Update an existing pet by Id **/
  updatePet: InContextSdkMethod<Mutation['updatePet'], MutationupdatePetArgs, MeshContext>,
  /** Add a new pet to the store **/
  addPet: InContextSdkMethod<Mutation['addPet'], MutationaddPetArgs, MeshContext>,
  /** Updates a pet in the store with form data **/
  updatePetWithForm: InContextSdkMethod<Mutation['updatePetWithForm'], MutationupdatePetWithFormArgs, MeshContext>,
  /** Deletes a pet **/
  deletePet: InContextSdkMethod<Mutation['deletePet'], MutationdeletePetArgs, MeshContext>,
  /** uploads an image **/
  uploadFile: InContextSdkMethod<Mutation['uploadFile'], MutationuploadFileArgs, MeshContext>,
  /** Place a new order in the store **/
  placeOrder: InContextSdkMethod<Mutation['placeOrder'], MutationplaceOrderArgs, MeshContext>,
  /** For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors **/
  deleteOrder: InContextSdkMethod<Mutation['deleteOrder'], MutationdeleteOrderArgs, MeshContext>,
  /** This can only be done by the logged in user. **/
  createUser: InContextSdkMethod<Mutation['createUser'], MutationcreateUserArgs, MeshContext>,
  /** Creates list of users with given input array **/
  createUsersWithListInput: InContextSdkMethod<Mutation['createUsersWithListInput'], MutationcreateUsersWithListInputArgs, MeshContext>,
  /** This can only be done by the logged in user. **/
  updateUser: InContextSdkMethod<Mutation['updateUser'], MutationupdateUserArgs, MeshContext>,
  /** This can only be done by the logged in user. **/
  deleteUser: InContextSdkMethod<Mutation['deleteUser'], MutationdeleteUserArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["petstore"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}

// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { findAndParseConfig } from '@graphql-mesh/cli';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { PetstoreTypes } from './sources/petstore/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Pet: ResolverTypeWrapper<Pet>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Category: ResolverTypeWrapper<Category>;
  Tag: ResolverTypeWrapper<Tag>;
  mutation_updatePet_status: mutation_updatePet_status;
  queryInput_findPetsByStatus_status: queryInput_findPetsByStatus_status;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  Order: ResolverTypeWrapper<Order>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  mutation_placeOrder_status: mutation_placeOrder_status;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  User: ResolverTypeWrapper<User>;
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']>;
  Mutation: ResolverTypeWrapper<{}>;
  Pet_Input: Pet_Input;
  Category_Input: Category_Input;
  Tag_Input: Tag_Input;
  ApiResponse: ResolverTypeWrapper<ApiResponse>;
  File: ResolverTypeWrapper<Scalars['File']>;
  Order_Input: Order_Input;
  User_Input: User_Input;
  ObjMap: ResolverTypeWrapper<Scalars['ObjMap']>;
  HTTPMethod: HTTPMethod;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Pet: Pet;
  BigInt: Scalars['BigInt'];
  String: Scalars['String'];
  Category: Category;
  Tag: Tag;
  JSON: Scalars['JSON'];
  Order: Order;
  Int: Scalars['Int'];
  DateTime: Scalars['DateTime'];
  Boolean: Scalars['Boolean'];
  User: User;
  EmailAddress: Scalars['EmailAddress'];
  Mutation: {};
  Pet_Input: Pet_Input;
  Category_Input: Category_Input;
  Tag_Input: Tag_Input;
  ApiResponse: ApiResponse;
  File: Scalars['File'];
  Order_Input: Order_Input;
  User_Input: User_Input;
  ObjMap: Scalars['ObjMap'];
}>;

export type enumDirectiveArgs = {
  value?: Maybe<Scalars['String']>;
};

export type enumDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = enumDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type globalOptionsDirectiveArgs = {
  sourceName?: Maybe<Scalars['String']>;
  endpoint?: Maybe<Scalars['String']>;
  operationHeaders?: Maybe<Scalars['ObjMap']>;
  queryStringOptions?: Maybe<Scalars['ObjMap']>;
  queryParams?: Maybe<Scalars['ObjMap']>;
};

export type globalOptionsDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = globalOptionsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type httpOperationDirectiveArgs = {
  path?: Maybe<Scalars['String']>;
  operationSpecificHeaders?: Maybe<Scalars['ObjMap']>;
  httpMethod?: Maybe<HTTPMethod>;
  isBinary?: Maybe<Scalars['Boolean']>;
  requestBaseBody?: Maybe<Scalars['ObjMap']>;
  queryParamArgMap?: Maybe<Scalars['ObjMap']>;
  queryStringOptionsByParam?: Maybe<Scalars['ObjMap']>;
};

export type httpOperationDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = httpOperationDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  findPetsByStatus?: Resolver<Maybe<Array<Maybe<ResolversTypes['Pet']>>>, ParentType, ContextType, RequireFields<QueryfindPetsByStatusArgs, 'status'>>;
  findPetsByTags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Pet']>>>, ParentType, ContextType, Partial<QueryfindPetsByTagsArgs>>;
  getPetById?: Resolver<Maybe<ResolversTypes['Pet']>, ParentType, ContextType, RequireFields<QuerygetPetByIdArgs, 'petId'>>;
  getInventory?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  getOrderById?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QuerygetOrderByIdArgs, 'orderId'>>;
  loginUser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<QueryloginUserArgs>>;
  logoutUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  getUserByName?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QuerygetUserByNameArgs, 'username'>>;
}>;

export type PetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Pet'] = ResolversParentTypes['Pet']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  photoUrls?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['mutation_updatePet_status']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type CategoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TagResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type OrderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  petId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  shipDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['mutation_placeOrder_status']>, ParentType, ContextType>;
  complete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['EmailAddress']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userStatus?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress';
}

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  updatePet?: Resolver<Maybe<ResolversTypes['Pet']>, ParentType, ContextType, Partial<MutationupdatePetArgs>>;
  addPet?: Resolver<Maybe<ResolversTypes['Pet']>, ParentType, ContextType, Partial<MutationaddPetArgs>>;
  updatePetWithForm?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationupdatePetWithFormArgs, 'petId'>>;
  deletePet?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeletePetArgs, 'petId'>>;
  uploadFile?: Resolver<Maybe<ResolversTypes['ApiResponse']>, ParentType, ContextType, RequireFields<MutationuploadFileArgs, 'petId'>>;
  placeOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, Partial<MutationplaceOrderArgs>>;
  deleteOrder?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteOrderArgs, 'orderId'>>;
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<MutationcreateUserArgs>>;
  createUsersWithListInput?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<MutationcreateUsersWithListInputArgs>>;
  updateUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationupdateUserArgs, 'username'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteUserArgs, 'username'>>;
}>;

export type ApiResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiResponse'] = ResolversParentTypes['ApiResponse']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface FileScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['File'], any> {
  name: 'File';
}

export interface ObjMapScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjMap'], any> {
  name: 'ObjMap';
}

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Pet?: PetResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  Category?: CategoryResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Order?: OrderResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  EmailAddress?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  ApiResponse?: ApiResponseResolvers<ContextType>;
  File?: GraphQLScalarType;
  ObjMap?: GraphQLScalarType;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  enum?: enumDirectiveResolver<any, any, ContextType>;
  globalOptions?: globalOptionsDirectiveResolver<any, any, ContextType>;
  httpOperation?: httpOperationDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = PetstoreTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export function getMeshOptions() {
  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
  return findAndParseConfig({
    dir: baseDir,
    artifactsDir: ".mesh",
    configName: "mesh",
    additionalPackagePrefixes: [],
    initialLoggerPrefix: "🕸️  Mesh",
  });
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: {"port":8080},
  })
}

let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltMesh(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));
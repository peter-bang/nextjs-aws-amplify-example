import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Users {
  readonly id: string;
  readonly name?: string | null;
  readonly userImageUrl?: string | null;
  readonly backgroundImageUrl?: string | null;
  readonly followerCount?: number | null;
  readonly followCount?: number | null;
  readonly userMessage?: string | null;
  readonly website?: string | null;
  readonly noticeCount?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Users, UsersMetaData>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users, UsersMetaData>) => MutableModel<Users, UsersMetaData> | void): Users;
}
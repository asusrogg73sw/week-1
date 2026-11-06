import type { User } from "./types";

// Task 2: Generic function
export function wrapInArray<T>(item: T): T[] {
  return [item];
}

// Task 3: Update User
export function updateUser(
  user: User,
  changes: Partial<User>
): User {
  return {
    ...user,
    ...changes,
  };
}

// Task 5: Get preview using Pick
export function getPreview(user: User): Pick<User, "id" | "name"> {
  return {
    id: user.id,
    name: user.name,
  };
}

// Task 5: PublicUser type using Omit
export type PublicUser = Omit<User, "email">;
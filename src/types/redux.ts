import { ContactType } from ".";

export type AddContactAction = {
  type: string;
  payload: ContactType;
};
export type DeleteContactAction = {
  type: string;
  payload: string;
};

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectAllContacts = (state) => state.contacts.items.data.contact;


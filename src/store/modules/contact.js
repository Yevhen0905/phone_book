import axios from 'axios';

export default {
  state: {
    contacts: [],
    contact: {}
  },
  mutations: {

    getContacts(state, contacts) {
      state.contacts = contacts
    },
    addContact(state, newContact) {
    	state.contacts.push(newContact)
    },

  },
  actions: {
    async fetchContacts(ctx) {
      const URL = 'https://63e3d8e565ae4931771908a8.mockapi.io/api/contacts';
      const res = await axios.get(URL);
      const contacts = await res.data;

      ctx.commit('getContacts', contacts)
    },

   async addContact(ctx, newContact) {
      const URL = 'https://63e3d8e565ae4931771908a8.mockapi.io/api/contacts';
      const res = await axios.post(URL);
      console.log(res);
      ctx.commit('addContact', newContact)
    },

  },
  getters: {
    allContacts: state => state.contacts,
    contact: state => state.contact
  }
}
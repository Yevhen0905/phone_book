import axios from 'axios';

const URL = 'https://63e3d8e565ae4931771908a8.mockapi.io/api/contacts/';

export default {
  state: {
    contacts: [],
    // contact: {}
  },
  mutations: {
    getContacts(state, contacts) {
      state.contacts = contacts
    },
    addContact(state, newContact) {
      state.contacts.push(newContact)
    },
    deleteContact(state, id) {
      state.contacts = state.contacts.filter(contact => contact.id !== id)
      // let index = state.contacts.findIndex(contact => contact.id === id)
      // contacts.splice(index, 1)
    }

  },
  actions: {
    async fetchContacts(ctx) {
      const res = await axios.get(URL);
      const contacts = await res.data;
      console.log(contacts);
      ctx.commit('getContacts', contacts)
    },

    async addContact(ctx, newContact, params) {
      params = {
        name: newContact.name,
        number: newContact.number,
      }
      let res = await axios.post(URL, params);
      console.log(res);
      ctx.commit('addContact', newContact)
    },

    async deleteContact(ctx, id) {
      let res = await axios.delete(URL + id);
      ctx.commit('deleteContact', id);
    }

  },
  getters: {
    allContacts: state => state.contacts,
    // contact: state => state.contact
  }
}
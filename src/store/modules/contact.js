import axios from 'axios';

const URL = 'https://63e3d8e565ae4931771908a8.mockapi.io/api/contacts/';

export default {
  state: {
    contacts: [],
    contact: {},
    sortBy: '',
    sortDirection: 'asc',  // порядок напряму
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
    },
    //отримую контакт  і встановлюю значення в масив і в контакт
    // setContact(state, id) {
    //     setTimeout(function() {
    //       let allContacts = state.contacts;
    //     state.contact = id ? allContacts.find(contact => contact.id === id) : {}
    //     }, 0)
    // },
    setSortContacts(state, sortKey) {
      if(sortKey === state.sortBy) {
        state.sortDirection = state.sortDirection === 'asc' ? 'desc' : 'asc';
      }
      let contacts = state.contacts
      state.sortBy = sortKey;
      contacts.sort((a, b) => {
        let modifier = 1;
        if(state.sortDirection === 'asc') modifier = -1;
        if(a[state.sortBy] < b[state.sortBy]) return -1 * modifier;
        if(a[state.sortBy] > b[state.sortBy]) return modifier
        return state.contacts = contacts
      })
    }
  },
  

  actions: {
    async fetchContacts(ctx) {
      const res = await axios.get(URL);
      const contacts = await res.data;
      // console.log(contacts);
      ctx.commit('getContacts', contacts)
    },

    async addContact(ctx, newContact, params) {
      params = {
        name: newContact.name,
        number: newContact.number,
      }
      let res = await axios.post(URL, params);
      ctx.commit('addContact', newContact)
    },

    async deleteContact(ctx, id) {
      let res = await axios.delete(URL + id);
      ctx.commit('deleteContact', id);
    },
    // setContact(ctx, id) {
    //   ctx.commit('setContact', id)
    // }
  },
  getters: {
    allContacts: state => state.contacts,
    contact: state => state.contact
  }
}
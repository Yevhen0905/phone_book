import axios from 'axios';

const URL = 'https://63e3d8e565ae4931771908a8.mockapi.io/api/contacts/';

export default {
  state: {
    contacts: [],
    contact: {},
    sortBy: '',
    sortDirection: 'asc',  // порядок напряму
    page: 1,
    limit: 7,
    totalCountContacts: '',
    loading: false 
  },
  mutations: {
    getContacts(state, contacts) {
      state.contacts = contacts
      // state.page = page
    },
    addContact(state, newContact) {
      state.contacts.push(newContact)
    },
    deleteContact(state, id) {
      state.contacts = state.contacts.filter(contact => contact.id !== id)
    },
    /// сортування
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
    },
    setTotalCountContacts(state, totalCountContacts) {
      state.totalCountContacts = totalCountContacts
    }
  },
  
  actions: {
    async fetchContacts({state, commit}) {
      const res = await axios.get(URL,{ 
       params: {
        page: state.page,
        limit: state.limit
       }
      });
      const contacts = await res.data;
      const total = contacts.length;
      console.log(res);
      commit('getContacts', contacts)
    },

    async getTotalCountContacts(ctx) {
      const res = await axios.get(URL);
      const totalCountContacts = await res.data.length;            
      ctx.commit('setTotalCountContacts', totalCountContacts )
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
    }
  },
  getters: {
    allContacts: state => state.contacts,
    contact: state => state.contact,
    numPages: state => Math.ceil(state.totalCountContacts / state.limit)
  }
}

<template>
  <div class="contacts">
    <h1>Contacts</h1>
    <div class="contacts_btn">
      <button class="btn" @click.prevent="isOpenForm = true">add contact</button>
    </div>
    <div class="contact_search"> Search
      <input class="contact_search_input" name="query" v-model="searchQuery">
    </div>
    <AddContact 
      v-if="isOpenForm" 
      @close="isOpenForm = false" 
    /> 
    <HeaderLinkContacts
       :title-contacts="headerContacts"  
       @toggle="toggleColor"     
    />
    <router-link
        v-for="contact in filteredData" 
        :key="contact.id"
        :to="`/contact/${contact.id}`"
      >
      <ContactItem 
        :contact="contact"         
    />
    </router-link>
    <PaginationContacts 
      :item-page="page"
      :num-pages="numPages"
      @paginate="onPageChange"
    />
  </div>
</template>

<script>
import AddContact from '@/components/AddContact.vue';
import ContactItem from '@/components/ContactItem.vue';
import HeaderLinkContacts from '@/components/HeaderLinkContacts.vue';
import PaginationContacts from '@/components/PaginationContacts.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ContactsList',
  components: {
    ContactItem,
    AddContact,
    HeaderLinkContacts,
    PaginationContacts
},
  data() {
    return {
      isOpenForm: false,
      searchQuery: '',
      headerContacts: [
        {
          title: 'name',
          isActive: true
        },
        {
          title: 'number',
          isActive: false
        },
        {
          title: 'date',
          isActive: false
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['allContacts', 'numPages']),

    filteredData() {
      let listContacts = this.allContacts;
     if(this.searchQuery != '' && this.searchQuery) {
      listContacts = listContacts.filter((contact) => {
        return contact.name
        .toLowerCase()
        .includes(this.searchQuery.toLowerCase())
      })
     }
     return listContacts
    },
    get() {
     return this.$store.state.page
    },
  },
  mounted() {
    this.fetchContacts(),
    this.getTotalCountContacts()
  },
  methods: {
    ...mapActions(['fetchContacts','getTotalCountContacts']),

    toggleColor(index) {
      this.headerContacts.forEach((item) => {
        item.isActive = false
      })
      this.headerContacts[index].isActive = !this.headerContacts[index].isActive
    },
    onPageChange(item) {
      this.page = item;
		},
  },
  created() {
    this.page = 1;
  }
}
</script>
<style scoped lang="scss">
.contacts {
  position: relative;
  max-width: 710px;
  width: 100%;
  margin: 50px auto;
}

.contacts_btn {
  margin-bottom: 30px;
}

.contacts_link {
  text-decoration: none;
}

.contact_search {
  margin-bottom: 20px;
}

.contact_search_input {
  padding: 5px 10px;
  font-size: 15px;
}
</style>

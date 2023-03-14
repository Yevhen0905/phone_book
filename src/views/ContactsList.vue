<template>
  <div class="contacts">
    <h1>Contacts</h1>
    <div class="contacts_btn">
      <button class="btn" @click.prevent="isOpenForm = true">add contact</button>
    </div>
    <div class="contact_search">
      <input class="contact_search_input" name="query" v-model="searchQuery">
    </div>
    <HeaderLinkContacts
       :title-contacts="HeaderContacts"
    />
    <AddContact 
      v-if="isOpenForm" 
      @close="isOpenForm = false" 
    />
    <ContactItem 
      :contact="contact"      
      v-for="contact in allContacts" 
      :key="contact.id"  
      :all-contact="allContacts"
    />
  </div>
</template>

<script>
import AddContact from '@/components/AddContact.vue';
import ContactItem from '@/components/ContactItem.vue';
import HeaderLinkContacts from '@/components/HeaderLinkContacts.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ContactsList',
  components: {
    ContactItem,
    AddContact,
    HeaderLinkContacts
},
  data() {
    return {
      isOpenForm: false,
      searchQuery: '',
      HeaderContacts: ['name', 'number', 'date'],
    }
  },
  computed: {
    ...mapGetters(['allContacts'])
  },
  mounted() {
    this.fetchContacts()
  },
  methods: {
    ...mapActions(['fetchContacts']),
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

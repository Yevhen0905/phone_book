<template>
  <div class="contacts">
    <h1>Contacts</h1>
    <div class="contacts_btn">
      <button class="btn" @click.prevent="isOpenForm = true">add contact</button>
    </div>
    <AddContact v-if="isOpenForm" @close="isOpenForm = false"/>
    <router-link 
       class="contacts_link" 
       v-for="contact in allContacts" 
       :key="contact.id" 
       :to="`/contact/${contact.id}`">
      <ContactItem :info="contact"/>
    </router-link>
  </div>
</template>

<script>
import AddContact from '@/components/AddContact.vue';
import ContactItem from '@/components/ContactItem.vue';
import { mapActions, mapGetters } from 'vuex';


export default {
  name: 'ContactsList',
  components: {
    ContactItem,
    AddContact
},
  data() {
    return {
      isOpenForm: false
    }
  },
  computed: {
     ...mapGetters(['allContacts'])
  },
  mounted() {
    this.fetchContacts()
  },
  methods: {
     ...mapActions(['fetchContacts'])

  }
}
</script>
<style>
.contacts {
  position: relative;
  max-width: 800px;
  width: 100%;
  margin: 50px auto;
}
.contacts_btn {
  margin-bottom: 30px;
}
.contacts_link {
  text-decoration: none;
}

</style>

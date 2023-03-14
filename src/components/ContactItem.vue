<template>
  <div class="block_item">
    <div>
      <i class="icon fa-regular fa-folder-open"></i>
    </div>
    <div class="contact_item">
      <div class="item" v-for="key in contact">
        {{ key }}
      </div>
    </div>
    <div class="contact_item_delete">
      <button class="remove_link" @click.prevent="remove()">
        <i class="icon fa-solid fa-trash-can"></i>
      </button>
    </div>
  </div>

  <!-- <div class="contact_item">
    <div>
      <i class="icon fa-regular fa-folder-open"></i>
    </div>
    <span class="contact_info">{{ contact.name }}</span>
    <span class="contact_info info_date ">{{ contact.number }}</span>
    <span class="contact_info info_date">{{ dateConverter(contact.date) }}</span>
    <div class="contact_item_delete">
      <button class="remove_link" @click.prevent="remove()">
        <i class="icon fa-solid fa-trash-can"></i>
      </button>
    </div>
  </div> -->
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ContactItem',
  props: {
    contact: Array,
  },
  methods: {
    ...mapActions(['deleteContact', 'fetchContacts']),
    remove() {
      this.deleteContact(this.contact.id)
      this.fetchContacts()
    },
    dateConverter(UNIX_timestamp) {
      const a = new Date(UNIX_timestamp * 1000);
      const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      const year = a.getFullYear();
      const month = '0' + months[a.getMonth()];
      const date = a.getDate();
      const time = `${date}.${month}.${year}`;
      return time;
    }
  }

}
</script>

<style scoped lang="scss">
.item {
  width: 33%;
}

.item:last-child {
  display: none;
}

.block_item {
  display: flex;
  align-items: center;
  border-radius: 4px;
  background-color: #fff;
  margin-bottom: 0.3rem;
  align-items: center;
}

.contact_item[data-v-13ab405a] {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 1rem 0;
    /* gap: 0.1rem; */
    /* margin: 0 auto 0.5rem; */
    /* font-size: 1.5rem; */
    /* letter-spacing: 0.5rem; */
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: 600;
    transition-duration: 0.4s;
    box-shadow: 0 0 15px rgb(186 187 192);
}
.icon {
  font-size: 25px;
}

.contact_item_delete {
  margin-left: auto;
}
.remove_link {
  border: none;
    outline: none;
}
.remove_link:hover {
  color: red;

  .icon {
    transform: scale(1.3);
  }
}

.contact_item_btn:hover {
  color: #257242;

  .icon {
    transform: scale(1.3);
  }
}
</style>
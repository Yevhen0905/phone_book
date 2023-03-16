<template>
    <div class="header_contact">
        <div class="header_contact_item" 
           v-for="item in titleContacts"
           @click="sortContact(item.title)"
           :class="{ active: item.isActive }"
        >
            {{ item.title }}
            <span class="arrow"> </span>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: 'HeaderLinkContacts',
    props: {
        titleContacts: Array,
    },
    methods: {
     ...mapMutations(['setSortContacts']),
     sortContact(s) {
        this.setSortContacts(s)
        this.toggleClass()
     },
     toggleClass() {
      this.isActive = !this.isActive;
     }
   }
}
</script>

<style scoped lang="scss">
.header_contact {
    display: flex;
    justify-content: center;
    gap: 0.1rem;
    margin: 0 auto 0.5rem;
    letter-spacing: 0.5rem;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: 600;
    transition-duration: 0.4s;
}

.header_contact_item {
    display: flex;
    align-items: center;
    padding: 1rem 3.9rem;
    box-shadow: 0 0 15px rgb(186 187 192);
    background-color: #828689;
    cursor: pointer;
    color: #cfc6c6;;
    font-size: 1rem;
    transition-duration: 0.4s;

    &.active {
        color: #fff;
        background-color: #2196F3;
    }

    &:first-child {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    &:last-child {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
}
.header_contact_item.active .arrow {
    opacity: 1;
}
.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}
.arrow {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
.arrow {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

</style>
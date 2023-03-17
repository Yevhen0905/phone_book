<template>
    <div class="contact_change">
        <button class="contact_change_back" @click.prevent="back()">back</button>
        <form action="" class="contact_change_form">
            <div class="contact_change_container"
            v-for="key in info"
            >
                <div class="contact_change_title">{{  }}</div>
                <span class="separator">:</span>
                <input class="contact_change_input" type="text">

            </div>
        </form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'ContactChange',
    data() {
        return {
           info: {
            name: '',
            number: ''
           },
           disabled: ['id', 'name', 'phone']
        }
    },
    mounted() {
        this.setContact(this.id),
        setTimeout(() => {
            this.info = this.contactInfo
        }, 0)
    },
    computed: {
        ...mapGetters(['contact']),
        contactInfo() {
           return this.contact
        },

    },
    methods: {
       ...mapActions(['setContact']),
        id() {
            return this.$router.params.id
        },
        back() {
            this.$router.push('/')
        }
    },
    // beforeDestroy() {
	// 	// для очистки contact в store
	// 	this.setContact()
	// }
}
</script>
<style></style>
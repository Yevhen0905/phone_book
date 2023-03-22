<template>
    <div class="add_contact">
        <h2>Contact</h2>
        <form action="">
            <div class="add_contact_item">
                <label for="name">Name</label>
                <input class="add_contact_input" type="text" id="name" v-model="info.name">
            </div>
            <div class="add_contact_item">
                <label for="number">Number</label>
                <input class="add_contact_input" type="number" id="number" v-model="info.number">
            </div>
            <div class="add_contact_btn">
                <button class="btn_cancel btn" @click.prevent="close">Cancel</button>
                <button class="btn_save btn" @click.prevent="submit" type="submit">Save</button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'AddContact',
    data() {
        return {
            info: {
                name: '',
                number: '',
            }
        }
    },
    methods: {
        ...mapActions(['addContact', 'fetchContacts']),
        close() {
            this.$emit('close')
        },
        async submit() {
            if (this.info.name && this.info.number) {
               await this.addContact(this.info)
                this.fetchContacts()
                this.close()
            } else {
                alert("Введіть ім'я и телефон")
            }
        }
    }
}
</script>

<style scoped lang="scss">
.add_contact {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 600px;
    width: 100%;
    background-color: rgb(252 252 252);
    border-radius: 4px;
    border: 1px solid rgb(66 69 75);
    padding: 20px;
    box-shadow: 0px 3px 12px rgb(62 189 216 / 50%);
}

.add_contact_item {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 25px;
    align-items: center;
}

.add_contact_input {
    width: 65%;
    padding: 5px;
    border: 1px solid transparent;
    /* border: none; */
    border-radius: 5px;
    height: 40px;
    background-color: #d5d0d08a;
    font-size: 20px;
    outline-color: rgb(66 69 75);
}

.add_contact_btn {
    display: flex;
    justify-content: space-between;

    .btn_cancel {
        background-color: #d44343;

        &:hover {
            background-color: #6e2222;
        }
    }
}</style>

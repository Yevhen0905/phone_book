<template>
    <div class="header_contact">
        <div class="header_contact_item" v-for="key in titleContacts">
            {{ key }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderLinkContacts',
    props: {
        titleContacts: Object
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
    padding: 1rem 3.9rem;
    box-shadow: 0 0 15px rgb(186 187 192);
    background-color:  #828689;;
    color: #fff;
    font-size: 1rem;

    &:first-child {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    &:last-child {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
}
</style>
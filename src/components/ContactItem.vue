<template>
  <div class="contact_item">
    <div>
      <i class="icon fa-regular fa-folder-open"></i>
    </div>
    <span class="contact_info">{{ info.name }}</span>
    <span class="contact_info info_date ">{{ info.number }}</span>
    <span class="contact_info info_date">{{ info.date }}</span>
    <div class="contact_item_delete">
      <button class="remove_link">
        <i class="icon fa-solid fa-trash-can"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ContactItem',
    props: {
      info: Object
    }

}
</script>

<style scoped lang="scss">
.contact_item {
  display: flex;
  align-items: center;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 15px rgb(186 187 192);
  cursor: pointer;
  margin-bottom: 10px;
  padding: 15px;
  align-items: center;
}

.contact_item_btn {
  margin-right: 9px;
}

.contact_info {
  display: inline-block;
  width: 30%;
}

.info_date {
  border-left: 1px solid;
}

.icon {
  font-size: 25px;
}

.contact_item_delete {
  margin-left: auto;
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
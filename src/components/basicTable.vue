<template>
  <div class="body">
    <div class="header">
      <md-button @click="isShowModal = true" class="md-fab md-primary">
        <md-icon>add</md-icon>
      </md-button>
    </div>
    <div class="wrapper" v-if="tableTicket.length > 0">
      <div class="tableTicket" v-for="item in tableTicket" :key="item.ticket_number">
        <div class="tableTicket__num">
          #{{ item.ticket_number }}
        </div>
        <div class="tableTicket__img">
          <div v-if="item.user.avatar === 'avatar1'">
            <img :src="avatar1"/>
          </div>
          <div v-if="item.user.avatar === 'avatar2'">
            <img :src="avatar2"/>
          </div>
          <div v-if="item.user.avatar === 'avatar3'">
            <img :src="avatar3"/>
          </div>
        </div>
        <div class="tableTicket__name">
          <p>{{ item.user.name }}</p>
        </div>
        <div class="tableTicket__subject">
          <p class="tableTicket__subject__text">Тип обращения: <span>{{ item.subject }}</span></p>
          <p class="tableTicket__subject__text">{{ item.body_subject }}</p>
        </div>
        <div class="tableTicket__priority">
          <div v-if="item.priority === 0">
            <p><span class="tableTicket__priority__color-new"></span> Новый</p>
          </div>
          <div v-if="item.priority === 1">
            <p><span class="tableTicket__priority__color-processing"></span> В обработке</p>
          </div>
          <div v-if="item.priority === 2">
            <p><span class="tableTicket__priority__color-postponed"></span> Отложено</p>
          </div>
          <div v-if="item.priority === 3">
            <p><span class="tableTicket__priority__color-close"></span> Закрыто</p>
          </div>
        </div>
        <div class="tableTicket__status">
          <div v-if="item.status === 0">
            <p><span>! </span>Низкий</p>
          </div>
          <div v-if="item.status === 1">
            <p><span>! </span>Средний</p>
          </div>
          <div v-if="item.status === 2">
            <p><span>! </span>Высокий</p>
          </div>
          <div v-if="item.status === 3">
            <p><span>! </span>Критический</p>
          </div>
        </div>
        <div class="tableTicket__date">
          <p>{{ item.date }}</p>
        </div>
        <div>
          <md-button @click="edit(item)" class="md-fab md-mini md-plain">
            <md-icon>edit</md-icon>
          </md-button>
        </div>
      </div>
    </div>
    <modal v-if="isShowModal">
      <FormModal :tableTicket="tableTicket" @hideModal="hideModal" :editData="editData" :isEdit="isEdit"/>
    </modal>
  </div>
</template>

<script>
import FormModal from './formModal'
export default {
  name: 'basicTable',
  components: {
    FormModal
  },
  data () {
    return {
      isEdit: false,
      editData: null,
      isShowModal: false,
      avatar1: require('@/assets/img/1.jpg'),
      avatar2: require('@/assets/img/2.jpg'),
      avatar3: require('@/assets/img/3.jpg')
    }
  },
  methods: {
    edit (item) {
      this.isEdit = true
      this.editData = JSON.parse(JSON.stringify(item))
      this.isShowModal = true
    },
    hideModal () {
      this.isEdit = false
      this.isShowModal = false
    }
  },
  computed: {
    tableTicket () {
      return this.$store.getters.TABLE_TICKET
    }
  }
}
</script>

<style lang="scss">
@import 'vue-material/dist/vue-material.min.css';
@import 'vue-material/dist/theme/default.css';
@import '../assets/slyle.scss';
</style>

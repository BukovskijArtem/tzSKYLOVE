<template>
  <div class="body">
    <div class="header">
      <button @click="isShowModal = true">Добавить тикет</button>
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
          <p>Тип обращения: <span>{{ item.subject }}</span></p>
          <p>{{ item.body_subject }}</p>
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
      </div>
    </div>
    <modal v-if="isShowModal">
      <FormModal :isShowModal="isShowModal" :tableTicket="tableTicket" @hideModal="hideModal"/>
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
      isShowModal: false,
      avatar1: require('@/assets/img/1.jpg'),
      avatar2: require('@/assets/img/2.jpg'),
      avatar3: require('@/assets/img/3.jpg'),
      // если я получаю данные через get,то tableTicket будет в computed
      tableTicket: [
        {ticket_number: 1, subject: 'Оплата', date: '31.03.2021 10:24', body_subject: 'рпасргтргшкрмгшрапсащжшасощшр ааршщ ктолтявщддтщяапрпасргтргшкрмгшрапсащжшасощшр ааршщ ктолтявщддтщяапрпасргтргшкрмгшрапсащжшасощшр ааршщ ктолтявщддтщяапрпасргтргшкрмгшрапсащжшасощшр ааршщ ктолтявщддтщяапрпасргтргшкрмгшрапсащжшасощшр ааршщ ктолтявщддтщяап', status: 0, priority: 0, user: {avatar: 'avatar1', name: 'artem artem', email: ''}},
        {ticket_number: 2, subject: 'Другое', date: '31.03.2021 10:24', body_subject: 'kfsjfhjfhsf', status: 1, priority: 1, user: {avatar: 'avatar2', name: 'masha', email: ''}},
        {ticket_number: 3, subject: 'Функционал', date: '31.03.2021 10:24', body_subject: 'kfsjfhjfhsf', status: 2, priority: 2, user: {avatar: 'avatar2', name: 'pasha', email: ''}},
        {ticket_number: 40, subject: 'Жалоба на пользователя', date: '31.03.2021 10:24', body_subject: 'kfsjfhjfhsf', status: 3, priority: 3, user: {avatar: 'avatar3', name: 'sveta', email: ''}}
      ]
    }
  },
  methods: {
    hideModal () {
      this.isShowModal = false
    }
  }
}
</script>

<style lang="scss">
@import '../assets/slyle.scss';
</style>

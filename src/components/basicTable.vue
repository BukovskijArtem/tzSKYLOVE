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
            <p><span class="tableTicket__priority__color-new"></span>Новый</p>
          </div>
          <div v-if="item.priority === 1">
            <p><span class="tableTicket__priority__color-processing"></span>В обработке</p>
          </div>
          <div v-if="item.priority === 2">
            <p><span class="tableTicket__priority__color-postponed"></span>Отложено</p>
          </div>
          <div v-if="item.priority === 3">
            <p><span class="tableTicket__priority__color-close"></span>Закрыто</p>
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

<style scoped>
.body {
  margin: auto;
  max-width: 1600px;
  position: relative;
}
.body p {
  font-family: "Lucida Console", Courier, monospace;
  color:#767a7e9a;
}
.header {
  width: 100%;
  height: 100px;
}
.header button{
  margin-left: 15px;
  margin-top: 30px;
  font-weight: 700;
  color: white;
  text-decoration: none;
  padding: .8em 1em calc(.8em + 3px);
  border-radius: 3px;
  background: #78cd51;
}
.header button:hover{
  cursor: pointer;
}
.wrapper {
  background-color: #C0C0C0;
  padding: 5px;
}
.tableTicket {
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  margin: 15px;
}
.tableTicket__num {
  text-align: center;
  margin-left: 15px;
  color: white;
  padding: 2px 5px 2px 5px;
  background-color: #FA8072;
  border-radius: 5px;
}
.tableTicket__img {
  margin-left: 15px;
  text-align: center;
}
.tableTicket__img img{
    width: 50px;
    height: 50px;
    object-fit: cover;
    object-position: center;
    top: 0;
}
.tableTicket__name {
  margin-left: 10px;
}
.tableTicket__subject {
  min-height: 80px;
  max-height: 80px;
  overflow-y: auto;
  scroll-snap-type: y proximity;
  min-width: 500px;
  max-width: 500px;
  background-color: #e6e1e1;
  border-radius: 5px;
  padding: 10px 10px 10px 10px;
  margin: 10px 0px 10px 100px;
  align-items: center;
}
.tableTicket__subject span{
  color: #02bfd8c9;
}
.tableTicket__subject::-webkit-scrollbar{
  width: 0;
}
.tableTicket__priority {
  margin-left: 50px;
}
.tableTicket__priority__color-new:before {
  content: ' \25CF';
  font-size: 20px;
  color:#78cd51;
}
.tableTicket__priority__color-processing:before {
  content: ' \25CF';
  font-size: 20px;
  color: #ff6c60;
}
.tableTicket__priority__color-postponed:before {
  content: ' \25CF';
  font-size: 20px;
  color: #fcb322;
}
.tableTicket__priority__color-close:before {
  content: ' \25CF';
  font-size: 20px;
  color: #bec3c7;
}
.tableTicket__status {
  margin-left: 50px;
}span
.tableTicket__status, span{
  color:#78cd51;
}
.tableTicket__date {
  margin-left: 50px;
  margin-right: 50px;
}
@media (max-width: 1600px) {
  .body {
    max-width: 1200px;
  }
}
@media (max-width: 1200px) {
  .body {
    max-width: 970px;
  }
}
@media (max-width: 992px) {
  .body {
    max-width: 750px;
  }
}
@media (max-width: 767px) {
  .body {
    max-width: none;
  }
}
</style>

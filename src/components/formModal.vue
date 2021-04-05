<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h2>Новый тикет</h2>
        </div>
        <div class="modal-body">
          <div class="modal-body__input">
            <p class="modal-body__text">Имя:</p>
            <input type="text" v-model="dataForm.user.name" @keypress="onlyNumber"/>
          </div>
          <div class="modal-body__input">
            <p class="modal-body__text">Email:</p>
            <input type="text" v-model="dataForm.user.email"/>
          </div>
          <div class="modal-body__input">
            <p class="modal-body__text">Сообщение:</p>
            <textarea v-model="dataForm.body_subject" />
          </div>
          <div class="modal-body__input">
            <p class="modal-body__text">Тип обращения:</p>
            <select v-model="dataForm.subject">
              <option v-for="option in optionsType" :key="option.value">
                {{ option.text }}
              </option>
            </select>
          </div>
          <div class="modal-body__input">
            <p class="modal-body__text">Приоритет:</p>
            <select v-model="priority">
              <option v-for="optionPriority in optionPriority" :key="optionPriority.value">
                {{ optionPriority.text }}
              </option>
            </select>
          </div>
          <div class="modal-body__input">
            <p class="modal-body__text">Статус:</p>
            <select v-model="status">
              <option v-for="optionStatus in optionStatus" :key="optionStatus.value">
                {{ optionStatus.text }}
              </option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button @click="addTicket"
          class="modal-button-save"
          :disabled="!this.dataForm.user.name.length || !this.dataForm.user.email.length || !this.dataForm.body_subject.length"
          :style="!this.dataForm.user.name.length || !this.dataForm.user.email.length || !this.dataForm.body_subject.length ? 'background: #808080;cursor: default' : ''">
            Сохранить
          </button>
          <button class="modal-button-close" @click="hideModal">
            Отмена
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'formModal',
  props: {
    isShowModal: null,
    tableTicket: null
  },
  data () {
    return {
      optionsType: [
        { text: 'Жалоба на пользователя', value: 0 },
        { text: 'Жалоба на приложение', value: 1 },
        { text: 'Жалоба на сайт', value: 2 },
        { text: 'Оплата', value: 3 },
        { text: 'Функционал', value: 4 },
        { text: 'Авторизация', value: 5 },
        { text: 'Модерация', value: 6 },
        { text: 'Другое', value: 7 }
      ],
      priority: 'Низкий',
      optionPriority: [
        { text: 'Низкий', value: 0 },
        { text: 'Средний', value: 1 },
        { text: 'Высокий', value: 2 },
        { text: 'Критический', value: 3 }
      ],
      status: 'Новый',
      optionStatus: [
        { text: 'Новый', value: 0 },
        { text: 'В обработке', value: 1 },
        { text: 'Отложено', value: 2 },
        { text: 'Закрыто', value: 3 }
      ],
      dataForm: {
        user: {
          name: '',
          email: '',
          avatar: ''
        },
        body_subject: '',
        subject: 'Жалоба на пользователя',
        status: 0,
        priority: 0,
        ticket_number: 1,
        date: 0
      }
    }
  },
  methods: {
    hideModal () {
      this.$emit('hideModal')
    },
    onlyNumber ($event) {
      let keyCode = ($event.keyCode ? $event.keyCode : $event.which)
      if (keyCode > 33 && keyCode < 64) {
        $event.preventDefault()
      }
    },
    addTicket () {
      let avatar = Math.floor(Math.random() * 3)
      switch (avatar) {
        case 0:
          this.dataForm.user.avatar = 'avatar1'
          break
        case 1:
          this.dataForm.user.avatar = 'avatar2'
          break
        case 2:
          this.dataForm.user.avatar = 'avatar3'
          break
      }
      switch (this.priority) {
        case 'Низкий':
          this.dataForm.priority = 0
          break
        case 'Средний':
          this.dataForm.priority = 1
          break
        case 'Высокий':
          this.dataForm.priority = 2
          break
        case 'Критический':
          this.dataForm.priority = 3
          break
      }
      switch (this.status) {
        case 'Новый':
          this.dataForm.status = 0
          break
        case 'В обработке':
          this.dataForm.status = 1
          break
        case 'Отложено':
          this.dataForm.status = 2
          break
        case 'Закрыто':
          this.dataForm.status = 3
          break
      }
      let date = new Date()
      this.dataForm.date = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes()
      if (this.tableTicket.length > 0) {
        let numArr = []
        for (let el of this.tableTicket) {
          numArr.push(el.ticket_number)
        }
        this.dataForm.ticket_number = Math.max(...numArr) + 1
      }
      console.log(JSON.stringify(this.dataForm))
      // данные в JSON,делаем post запрос и сразу get для обновления tableTicket
      this.tableTicket.push(this.dataForm)
      this.$emit('hideModal')
    }
  }
}
</script>

<style lang="scss">
@import '../assets/slyle.scss';
</style>

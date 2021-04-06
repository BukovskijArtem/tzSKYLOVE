<template>
  <div class="modal-mask">
    <div class="modal-wrapper"  @click.self="hideModal">
      <div class="modal-container">
        <div class="modal-header">
          <h2>Новый тикет</h2>
        </div>
        <div class="modal-body">
          <div class="modal-body__input">
            <p class="modal-body__text">Имя:</p>
            <input type="text" v-model="dataForm.user.name" @keypress="onlyNumber"/>
            <div v-if="dataForm.user.name.length === 0">
              <p class="modal-body__text-form">Введите имя</p>
            </div>
          </div>
          <div class="modal-body__input">
            <p class="modal-body__text">Email:</p>
            <input type="text" v-model="dataForm.user.email"/>
            <div v-if="dataForm.user.email.length === 0">
              <p class="modal-body__text-form">Введите email</p>
            </div>
          </div>
          <div class="modal-body__input">
            <p class="modal-body__text">Сообщение:</p>
            <textarea v-model="dataForm.body_subject" />
            <div v-if="dataForm.body_subject.length === 0">
              <p class="modal-body__text-form">Введите сообщение</p>
            </div>
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
          <md-button class="md-primary" @click="addTicket" :disabled="!this.dataForm.user.name.length || !this.dataForm.user.email.length || !this.dataForm.body_subject.length">Сохранить</md-button>
          <md-button class="md-accent" @click="hideModal">Отмена</md-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'formModal',
  props: {
    isEdit: null,
    editData: null,
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
      if (this.isEdit) {
        for (let el of this.tableTicket) {
          if (el.ticket_number === this.dataForm.ticket_number) {
            el.user = this.dataForm.user
            el.body_subject = this.dataForm.body_subject
            el.status = this.dataForm.status
            el.priority = this.dataForm.priority
            el.date = this.dataForm.date
          }
        }
      } else {
        if (this.tableTicket.length > 0) {
          let numArr = []
          for (let el of this.tableTicket) {
            numArr.push(el.ticket_number)
          }
          this.dataForm.ticket_number = Math.max(...numArr) + 1
        }
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
        this.tableTicket.push(this.dataForm)
      }
      console.log(JSON.stringify(this.dataForm))
      // данные в JSON,делаем post запрос и сразу get для обновления tableTicket
      this.$emit('hideModal')
    }
  },
  mounted () {
    if (this.isEdit) {
      this.dataForm = this.editData
    }
  }
}
</script>

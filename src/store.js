import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        tableTicket: [
            {ticket_number: 1, subject: 'Оплата', date: '31.03.2021 10:24', body_subject: 'рпасргтргшкрмгшрапсащжшасощшр ааршщ ктолтявщддтщяапрпасргтргшкрмгшрапсащжшасощшр ааршщ ктолтявщддтщяапрпасргтргшкрмгшрапсащжшасощшр ааршщ ктолтявщддтщяапрпасргтргшкрмгшрапсащжшасощшр ааршщ ктолтявщддтщяапрпасргтргшкрмгшрапсащжшасощшр ааршщ ктолтявщддтщяап', status: 0, priority: 0, user: {avatar: 'avatar1', name: 'artem artem', email: ''}},
            {ticket_number: 2, subject: 'Другое', date: '31.03.2021 10:24', body_subject: 'kfsjfhjfhsf', status: 1, priority: 1, user: {avatar: 'avatar2', name: 'masha', email: ''}},
            {ticket_number: 3, subject: 'Функционал', date: '31.03.2021 10:24', body_subject: 'kfsjfhjfhsf', status: 2, priority: 2, user: {avatar: 'avatar2', name: 'pasha', email: ''}},
            {ticket_number: 40, subject: 'Жалоба на пользователя', date: '31.03.2021 10:24', body_subject: 'kfsjfhjfhsf', status: 3, priority: 3, user: {avatar: 'avatar3', name: 'sveta', email: ''}}
        ]
    },
    getters: {
        TABLE_TICKET (state) {
            return state.tableTicket
        }
    },
    mutations: {},
    actions: {}
});

export default store;
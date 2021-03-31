import Vue from 'vue'
import Notifications from 'vt-notifications'

Vue.use(Notifications, <%= serialize(options) %>)

export default function (ctx, inject) {
    inject('notify', Notifications.notify)
}
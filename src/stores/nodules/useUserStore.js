import { defineStore } from 'pinia'
export const useUserStore = defineStore('store', {
    state: () => {
        return {
            tagslist: [{
                title: '首页',
                key: 'home',
                closable: false
            }, {
                title: '用户中心',
                key: 'home',
                closable: false
            }, {
                title: '讨论',
                key: 'home',
                closable: false
            }],
        }
    },
    actions: {
        changeTagList(obj) {
            const key = this.tagslist.find(item => {
                return item.key == obj.key
            })
            if (!key) {
                const objs = {
                    ...obj,
                    closable: false
                }
                this.tagslist.push(objs)
            }
        },
        deleteTagList(k) {
            const key = this.tagslist.findIndex(item => {
                return item.key == k
            })
            this.tagslist.splice(key, 1)
        },
    }
})

// pinia不需要mutation，只需要使用action来改变状态

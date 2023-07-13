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
            console.log(this.tagslist);
            if (!this.tagslist.some(ele => ele.key === obj.key)) {
                const objs = {
                    ...obj,
                    closable: false
                }
                console.log(this.tagslist.some(ele => ele.key === obj.key));
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

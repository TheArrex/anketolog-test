import { createStore } from 'vuex'

export const store = createStore({
    state () {
        return {
            tree: [
                {
                    name: 'Dir 1',
                    type: 'folder',
                    children: [
                        {
                            name: 'Dir 1-1',
                            type: 'folder',
                            children: [
                                {
                                    name: 'File 1-1-1',
                                    type: 'file'
                                }
                            ]
                        },
                        { name: 'File 1-2', type: 'file' }
                    ]
                }, {
                    name: 'Dir 2',
                    type: 'folder',
                    children: [
                        { name: 'Dir 2-1', type: 'folder' },
                        { name: 'File 2-2', type: 'file' }
                    ]
                }, {
                    name: 'File 2',
                    type: 'file'
                }
            ]
        }
    },
    mutations: {
        //I know, it's awful and non-expandable, but i can't find better solution
        removeItem(state, {data}) {
            let index = state.tree.indexOf(data)
            if (index !== -1) {
                state.tree.splice(index, 1)
            } else {
                state.tree.forEach((element) => {
                    if (element.children) {
                        index = element.children.indexOf(data)
                        if (index !== -1) {
                            element.children.splice(index, 1)
                        } else {
                            element.children.forEach((element) => {
                                if (element.children) {
                                    index = element.children.indexOf(data)
                                    if (index !== -1) {
                                        element.children.splice(index, 1)
                                    }
                                }
                            })
                        }
                    }
                })
            }
        }
    }
})
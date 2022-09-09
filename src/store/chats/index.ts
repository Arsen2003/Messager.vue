import { Istate, searchChat, Ichat } from './types';

const chats = {
	state: () => ({
		items: [],
		currentChat: null,
	}),
	getters: {
		getFilteredChats: (state: Istate) => (searchChat: searchChat) => {
			return state.items.filter((chat) => chat.name.includes(searchChat));
		},
	},
	mutations: {
		GET_CHATS(state: Istate, chats: Ichat[]) {
			state.items = chats;
		},
		SET_CURRENT_CHAT(state: Istate, currentChat: Ichat) {
			state.currentChat = currentChat;
		},
	},
	actions: {
		async getChats({ commit }: any) {
			const response = await fetch('http://localhost:3000/chats');
			const chats = await response.json();
			commit('GET_CHATS', chats);
		},
		async setCurrentChat({ commit }: any, id: number) {
			const response = await fetch('http://localhost:3000/chats/' + id);
			const clickedChat = await response.json();
			commit('SET_CURRENT_CHAT', clickedChat);
		},
	},
};

export default chats;

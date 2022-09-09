export interface Istate {
	items: Ichat[];
	currentChat: Ichat;
}

export type searchChat = string;

export interface Ichat {
	id: number;
	name: string;
	data: string;
	isOnline: boolean;
	lastMessage: string;
	profileImg: string;
}

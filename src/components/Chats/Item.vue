<template>
	<div class="chats-item" :class="{ selected: activeChatItem === index }">
		<div class="chats-item__avatar">
			<img :src="userIcon" alt="Анастасия" />
			<span :class="{ online: chat.isOnline, offline: !chat.isOnline }"></span>
		</div>
		<div class="chats-item__right">
			<div class="chats-item__status">
				<span v-if="chat.isOnline">Online</span>
				<span v-else>Offline</span>
				<span>{{ chat.date }}</span>
			</div>
			<div class="chats-item__name">{{ chat.name }}</div>
			<div class="chats-item__last">{{ chat.lastMessage }}</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: ["chat", "activeChatItem", "index"],
	name: "Home",
	setup() {
		return {
			userIcon: require("@/assets/user1.png"),
		};
	},
});
</script>
<style lang="scss">
@import "@/assets/scss/index.scss";
.chats {
	&-item {
		display: flex;
		width: vw(240);
		border-top: 2px solid $greyBlue97;
		padding: vw(20) vw(20);
		border-radius: vw(10);
		transition: 0.3s;
		cursor: pointer;
		&.selected {
			background-color: $blue;
			.chats-item__name {
				color: $white;
			}
			.chats-item__last {
				color: $white;
				opacity: 0.8;
			}
			.chats-item__status {
				color: $white;
				opacity: 0.6;
			}
		}
		&__avatar {
			position: relative;
			margin-right: vw(20);
			width: vw(45);
			height: vw(45);
			img {
				width: vw(45);
				height: vw(45);
			}
			span {
				position: absolute;
				right: 0;
				top: 0;
				transform: translate(10%, -10%);
				display: inline-block;
				width: vw(10);
				height: vw(10);
				border-radius: 50%;
				border: 2px solid $bg-white;
			}
			span.online {
				background-color: $bg-green;
			}
			span.offline {
				background-color: $greyBlue85;
			}
		}
		&__status {
			@include font(vw(12));
			display: flex;
			justify-content: space-between;
			color: $greyBlue80;
			margin-bottom: vw(5);
			transition: 0.3s;
		}
		&__right {
			width: vw(165);
		}
		&__name {
			@include font(vw(12));
			color: $greyBlue50;
			margin-bottom: vw(12);
			transition: 0.3s;
		}
		&__last {
			@include font(vw(12), 600);
			color: $greyBlue80;
			transition: 0.3s;
		}
	}
}
</style>
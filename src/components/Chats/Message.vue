<template>
	<div class="message" :class="{ me: isMe }">
		<img class="message__avatar" :src="user" alt="user" />
		<div class="message__head">
			<div class="message__user">
				<h3>Stephen Park</h3>
				<span class="message__date">12:45</span>
			</div>
			<p class="message__content">{{ text }}</p>
		</div>
	</div>
</template>

<script>
import user from "./user.jpg";
export default {
	props: ["isMe", "text"],
	setup() {
		return { user };
	},
};
</script>

<style lang="scss">
@import "@/assets/scss/index.scss";
.message {
	display: flex;
	margin-bottom: vw(30);
	&.me {
		flex-direction: row-reverse;
		.message__user {
			flex-direction: row-reverse;
		}
		.message__avatar {
			margin-right: 0;
			margin-left: vw(30);
		}
	}
	&__avatar {
		margin-right: vw(30);
		width: vw(45);
		height: vw(45);
		border-radius: 50%;
	}
	&__head {
		div {
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
		}
		h3 {
			@include font(vw(13), 700);
			color: $greyBlue50;
			margin: vw(5) 0 vw(5);
		}
	}
	&__date {
		@include font(vw(12), 600, vw(20));
		color: $greyBlue80;
		margin-top: vw(5);
	}
	&__content {
		@include font(vw(12), 600, vw(20));
		color: $greyBlue60;
		background: $bg-white;
		border-radius: vw(10);
		padding: vw(20);
		max-width: vw(370);
	}
}
</style>
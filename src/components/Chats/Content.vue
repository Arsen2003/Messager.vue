<template>
	<PerfectScrollbar>
		<div class="chats-content">
			<Message
				:isMe="true"
				text="Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Правилами продолжил переулка предупредила одна прямо эта вершину журчит великий."
			/>
			<Message text="Далеко-далеко за словесными горами в стране" />
			<Message text="Далеко-далеко за словесными горами в стране" />
			<Message
				:isMe="true"
				text="Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Правилами продолжил переулка предупредила одна прямо эта вершину журчит великий."
			/>
			<Message text="Далеко-далеко за словесными горами в стране" />
		</div>
	</PerfectScrollbar>
</template>

<script>
import Message from "./Message.vue";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
export default {
	components: { Message, PerfectScrollbar },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
@import "~perfect-scrollbar/css/perfect-scrollbar.css";
.chats-content {
	padding: vw(30);
	max-height: vw(540);
}
.ps{
	margin: 0 vw(-30)
}
</style>
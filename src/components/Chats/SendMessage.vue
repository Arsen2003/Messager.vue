<template>
	<div class="send-message">
		<div>
			<label class="">
				<input type="file" />
				<img :src="fileIcon" alt="" />
			</label>
		</div>
	</div>
</template>

<script>
import fileIcon from "./file.svg";
export default {
	components: {},
	setup() {
		return { fileIcon };
	},
};
</script>

<style lang="scss">
@import "@/assets/scss/index.scss";
.send-message {
	border-top: 2px solid #edeff2;
	padding-top: vw(30);
	label {
		cursor: pointer;
	}
	input[type="file"] {
		display: none;
		cursor: pointer;
	}
}
</style>
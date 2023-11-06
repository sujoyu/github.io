<script lang="ts">
	export let id: string | null = null;
</script>

<div {id}><slot /></div>

<style lang="scss">
	div {
		max-width: 600px;
		margin: auto;
	}
</style>

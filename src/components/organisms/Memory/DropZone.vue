<template>
	<div :data-active="active" 
  @dragenter.prevent="setActive" 
  @dragover.prevent="setActive" 
  @dragleave.prevent="setInactive" 
  @drop.prevent="onDrop">
		<slot :dropZoneActive="active"></slot>
	</div>
</template>

<template>
	<div 
  :data-active="active" 
  @dragenter.prevent="setActive" 
  @dragover.prevent="setActive" 
  @dragleave.prevent="setInactive" 
  @drop.prevent="onDrop">
		<slot :dropZoneActive="active"></slot>
	</div>
</template>
<script>
export default {
  name: 'Card',
  props: ['active','setActive','setInactive','onDrop' ],
  methods : {
  setActive() {
	active.value = true
	clearTimeout(inActiveTimeout)
},
 setInactive() {
	inActiveTimeout = setTimeout(() => {
		active.value = false
	}, 50)
},
 onDrop(e) {
	setInactive()
	emit('files-dropped', [...e.dataTransfer.files])
},
 preventDefaults(e) {
	e.preventDefault()
}
  }
};
</script>

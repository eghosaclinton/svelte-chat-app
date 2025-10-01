<script lang="ts">
    let m = $state({x: 0, y: 0})

    function onpointermove(event: PointerEvent){
        m.x = event.clientX
        m.y = event.clientY
    }
</script>

<div {onpointermove}>
    Your mouse is at {Math.round(m.x)}
</div>
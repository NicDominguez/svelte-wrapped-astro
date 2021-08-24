
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let label = undefined;
export let sublabel = undefined;
export let range;
export let notifications = undefined;
export let min = undefined;
export let max = undefined;
export let progress = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('range', range);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<rux-monitoring-progress-icon 
  label={label}
  sublabel={sublabel}
  notifications={notifications}
  min={min}
  max={max}
  progress={progress}
  
  bind:this={__ref}
>
  <slot></slot>
</rux-monitoring-progress-icon>
  
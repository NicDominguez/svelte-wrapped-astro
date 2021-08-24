
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let value = undefined;
export let max = undefined;
export let hideLabel = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<rux-progress 
  value={value}
  max={max}
  hide-label={hideLabel}
  
  bind:this={__ref}
>
  <slot></slot>
</rux-progress>
  

<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let classification = undefined;
export let label = undefined;
export let tag = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<rux-classification-marking 
  classification={classification}
  label={label}
  tag={tag}
  
  bind:this={__ref}
>
  <slot></slot>
</rux-classification-marking>
  
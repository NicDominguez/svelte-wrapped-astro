
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let size = undefined;
export let icon;
export let color = undefined;
export let label = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<rux-icon 
  size={size}
  icon={icon}
  color={color}
  label={label}
  
  bind:this={__ref}
>
  <slot></slot>
</rux-icon>
  

<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let icon = undefined;
export let iconOnly = undefined;
export let secondary = undefined;
export let disabled = undefined;
export let size = undefined;
export let type = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<rux-button 
  icon={icon}
  icon-only={iconOnly}
  secondary={secondary}
  disabled={disabled}
  size={size}
  type={type}
  
  bind:this={__ref}
>
  <slot></slot>
</rux-button>
  
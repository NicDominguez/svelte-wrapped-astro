
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let disabled = undefined;
export let checked = undefined;
export let label = undefined;
export let name = undefined;
export let value = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
  if (e.type === 'rux-change') { checked = e.detail; }
};
</script>

<rux-push-button 
  disabled={disabled}
  checked={checked}
  label={label}
  name={name}
  value={value}
  on:rux-change={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</rux-push-button>
  
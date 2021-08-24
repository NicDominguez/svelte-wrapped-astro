
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let disabled = undefined;
export let value = undefined;
export let href = undefined;
export let target = undefined;
export let rel = undefined;
export let download = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<rux-menu-item 
  disabled={disabled}
  value={value}
  href={href}
  target={target}
  rel={rel}
  download={download}
  on:rux-menu-item-selected={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</rux-menu-item>
  
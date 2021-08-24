
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let min = undefined;
export let max = undefined;
export let step = undefined;
export let value = undefined;
export let disabled = undefined;
export let name = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<rux-slider 
  min={min}
  max={max}
  step={step}
  value={value}
  disabled={disabled}
  name={name}
  on:rux-input={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</rux-slider>
  
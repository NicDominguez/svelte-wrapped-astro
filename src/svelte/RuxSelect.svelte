
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let disabled = undefined;
export let required = undefined;
export let label = undefined;
export let inputId = undefined;
export let labelId = undefined;
export let invalid = undefined;
export let name = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<rux-select 
  disabled={disabled}
  required={required}
  label={label}
  input-id={inputId}
  label-id={labelId}
  invalid={invalid}
  name={name}
  on:rux-change={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</rux-select>
  
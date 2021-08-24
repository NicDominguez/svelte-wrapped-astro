
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let helpText = undefined;
export let errorText = undefined;
export let name = undefined;
export let value = undefined;
export let checked = undefined;
export let indeterminate = undefined;
export let disabled = undefined;
export let required = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<rux-checkbox 
  help-text={helpText}
  error-text={errorText}
  name={name}
  value={value}
  checked={checked}
  indeterminate={indeterminate}
  disabled={disabled}
  required={required}
  on:rux-change={onEvent}
  on:rux-input={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</rux-checkbox>
  
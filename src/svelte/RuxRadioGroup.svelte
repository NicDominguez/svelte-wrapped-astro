
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let label = undefined;
export let invalid = undefined;
export let name = undefined;
export let value = undefined;
export let helpText = undefined;
export let errorText = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
  if (e.type === 'rux-change') { value = e.detail; }
};
</script>

<rux-radio-group 
  label={label}
  invalid={invalid}
  name={name}
  value={value}
  help-text={helpText}
  error-text={errorText}
  on:rux-change={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</rux-radio-group>
  

<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let label = undefined;
export let placeholder = undefined;
export let helpText = undefined;
export let errorText = undefined;
export let invalid = undefined;
export let value = undefined;
export let name = undefined;
export let minLength = undefined;
export let maxLength = undefined;
export let rows = undefined;
export let disabled = undefined;
export let required = undefined;
export let small = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
  if (e.type === 'rux-change') { value = e.detail; }
  if (e.type === 'rux-input') { value = e.detail; }
};
</script>

<rux-textarea 
  label={label}
  placeholder={placeholder}
  help-text={helpText}
  error-text={errorText}
  invalid={invalid}
  value={value}
  name={name}
  min-length={minLength}
  max-length={maxLength}
  rows={rows}
  disabled={disabled}
  required={required}
  small={small}
  on:rux-change={onEvent}
  on:rux-input={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</rux-textarea>
  
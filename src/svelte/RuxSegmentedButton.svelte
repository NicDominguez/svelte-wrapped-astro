
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let data = undefined;
export let selected = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('data', data);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
  if (e.type === 'rux-change') { value = e.detail; }
};
</script>

<rux-segmented-button 
  selected={selected}
  on:rux-change={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</rux-segmented-button>
  
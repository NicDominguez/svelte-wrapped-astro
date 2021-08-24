
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let expanded = undefined;
export let selected = undefined;

export const setExpanded = (...args) => __ref.setExpanded(...args);
export const setSelected = (...args) => __ref.setSelected(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<rux-tree-node 
  expanded={expanded}
  selected={selected}
  on:rux-tree-node-selected={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</rux-tree-node>
  
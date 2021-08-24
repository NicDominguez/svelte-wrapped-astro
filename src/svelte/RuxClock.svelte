
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let aos = undefined;
export let los = undefined;
export let timezone = undefined;
export let hideTimezone = undefined;
export let hideDate = undefined;
export let small = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<rux-clock 
  aos={aos}
  los={los}
  timezone={timezone}
  hide-timezone={hideTimezone}
  hide-date={hideDate}
  small={small}
  
  bind:this={__ref}
>
  <slot></slot>
</rux-clock>
  

<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let open = undefined;
export let message = undefined;
export let status = undefined;
export let closeAfter = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<rux-notification 
  open={open}
  message={message}
  status={status}
  close-after={closeAfter}
  
  bind:this={__ref}
>
  <slot></slot>
</rux-notification>
  
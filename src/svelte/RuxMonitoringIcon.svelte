
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let status = undefined;
export let label;
export let sublabel = undefined;
export let icon;
export let notifications = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<rux-monitoring-icon 
  status={status}
  label={label}
  sublabel={sublabel}
  icon={icon}
  notifications={notifications}
  
  bind:this={__ref}
>
  <slot></slot>
</rux-monitoring-icon>
  

<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let triggerEl = undefined;
export let anchorEl = undefined;
export let open = undefined;

export const isOpen = (...args) => __ref.isOpen(...args);
export const show = (...args) => __ref.show(...args);
export const close = (...args) => __ref.close(...args);
export const toggle = (...args) => __ref.toggle(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('triggerEl', triggerEl);
$: if (__mounted) setProp('anchorEl', anchorEl);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<rux-pop-up-menu 
  open={open}
  on:rux-menu-will-open={onEvent}
  on:rux-menu-will-close={onEvent}
  on:rux-menu-did-open={onEvent}
  on:rux-menu-did-close={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</rux-pop-up-menu>
  
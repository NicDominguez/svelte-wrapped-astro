
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let open;
export let modalMessage;
export let modalTitle;
export let confirmText = undefined;
export let denyText = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<rux-modal 
  open={open}
  modal-message={modalMessage}
  modal-title={modalTitle}
  confirm-text={confirmText}
  deny-text={denyText}
  on:rux-modal-closed={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</rux-modal>
  
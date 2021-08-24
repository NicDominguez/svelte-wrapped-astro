
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let includeIcon = undefined;
export let includeAppState = undefined;
export let includeUsername = undefined;
export let appDomain = undefined;
export let appName = undefined;
export let appVersion = undefined;
export let menuIcon = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<rux-global-status-bar 
  include-icon={includeIcon}
  include-app-state={includeAppState}
  include-username={includeUsername}
  app-domain={appDomain}
  app-name={appName}
  app-version={appVersion}
  menu-icon={menuIcon}
  
  bind:this={__ref}
>
  <slot></slot>
</rux-global-status-bar>
  
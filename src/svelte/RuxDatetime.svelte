
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let date = undefined;
export let locale = undefined;
export let year = undefined;
export let month = undefined;
export let day = undefined;
export let hour = undefined;
export let minute = undefined;
export let second = undefined;
export let timeZoneName = undefined;
export let timeZone = undefined;
export let hour12 = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<rux-datetime 
  date={date}
  locale={locale}
  year={year}
  month={month}
  day={day}
  hour={hour}
  minute={minute}
  second={second}
  time-zone-name={timeZoneName}
  time-zone={timeZone}
  hour-12={hour12}
  
  bind:this={__ref}
>
  <slot></slot>
</rux-datetime>
  
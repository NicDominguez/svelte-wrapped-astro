import { Components } from '@astrouxds/astro-web-components';
interface RuxIconGestureProps {
    /** The fill color for the icon */
    color?: Components.RuxIconGesture["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconGesture["size"];
}
interface RuxIconGestureEvents {
}
interface RuxIconGestureSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconGesture extends SvelteComponent {
    $$prop_def: RuxIconGestureProps;
    $$events_def: RuxIconGestureEvents;
    $$slot_def: RuxIconGestureSlots;
    $on<K extends keyof RuxIconGestureEvents>(type: K, callback: (e: RuxIconGestureEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconGestureProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconGestureElement | undefined;
}
export default RuxIconGesture;

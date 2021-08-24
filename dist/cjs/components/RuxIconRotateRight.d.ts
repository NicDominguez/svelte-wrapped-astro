import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRotateRightProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRotateRight["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRotateRight["size"];
}
interface RuxIconRotateRightEvents {
}
interface RuxIconRotateRightSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRotateRight extends SvelteComponent {
    $$prop_def: RuxIconRotateRightProps;
    $$events_def: RuxIconRotateRightEvents;
    $$slot_def: RuxIconRotateRightSlots;
    $on<K extends keyof RuxIconRotateRightEvents>(type: K, callback: (e: RuxIconRotateRightEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRotateRightProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRotateRightElement | undefined;
}
export default RuxIconRotateRight;

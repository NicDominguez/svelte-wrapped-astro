import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBorderInnerProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBorderInner["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBorderInner["size"];
}
interface RuxIconBorderInnerEvents {
}
interface RuxIconBorderInnerSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBorderInner extends SvelteComponent {
    $$prop_def: RuxIconBorderInnerProps;
    $$events_def: RuxIconBorderInnerEvents;
    $$slot_def: RuxIconBorderInnerSlots;
    $on<K extends keyof RuxIconBorderInnerEvents>(type: K, callback: (e: RuxIconBorderInnerEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBorderInnerProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBorderInnerElement | undefined;
}
export default RuxIconBorderInner;

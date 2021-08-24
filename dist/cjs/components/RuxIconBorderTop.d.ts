import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBorderTopProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBorderTop["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBorderTop["size"];
}
interface RuxIconBorderTopEvents {
}
interface RuxIconBorderTopSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBorderTop extends SvelteComponent {
    $$prop_def: RuxIconBorderTopProps;
    $$events_def: RuxIconBorderTopEvents;
    $$slot_def: RuxIconBorderTopSlots;
    $on<K extends keyof RuxIconBorderTopEvents>(type: K, callback: (e: RuxIconBorderTopEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBorderTopProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBorderTopElement | undefined;
}
export default RuxIconBorderTop;

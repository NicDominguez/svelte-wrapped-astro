import { Components } from '@astrouxds/astro-web-components';
interface RuxIconViewColumnProps {
    /** The fill color for the icon */
    color?: Components.RuxIconViewColumn["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconViewColumn["size"];
}
interface RuxIconViewColumnEvents {
}
interface RuxIconViewColumnSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconViewColumn extends SvelteComponent {
    $$prop_def: RuxIconViewColumnProps;
    $$events_def: RuxIconViewColumnEvents;
    $$slot_def: RuxIconViewColumnSlots;
    $on<K extends keyof RuxIconViewColumnEvents>(type: K, callback: (e: RuxIconViewColumnEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconViewColumnProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconViewColumnElement | undefined;
}
export default RuxIconViewColumn;

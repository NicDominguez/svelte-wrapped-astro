import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSystemUpdateProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSystemUpdate["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSystemUpdate["size"];
}
interface RuxIconSystemUpdateEvents {
}
interface RuxIconSystemUpdateSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSystemUpdate extends SvelteComponent {
    $$prop_def: RuxIconSystemUpdateProps;
    $$events_def: RuxIconSystemUpdateEvents;
    $$slot_def: RuxIconSystemUpdateSlots;
    $on<K extends keyof RuxIconSystemUpdateEvents>(type: K, callback: (e: RuxIconSystemUpdateEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSystemUpdateProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSystemUpdateElement | undefined;
}
export default RuxIconSystemUpdate;

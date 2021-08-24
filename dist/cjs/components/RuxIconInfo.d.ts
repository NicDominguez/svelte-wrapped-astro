import { Components } from '@astrouxds/astro-web-components';
interface RuxIconInfoProps {
    /** The fill color for the icon */
    color?: Components.RuxIconInfo["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconInfo["size"];
}
interface RuxIconInfoEvents {
}
interface RuxIconInfoSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconInfo extends SvelteComponent {
    $$prop_def: RuxIconInfoProps;
    $$events_def: RuxIconInfoEvents;
    $$slot_def: RuxIconInfoSlots;
    $on<K extends keyof RuxIconInfoEvents>(type: K, callback: (e: RuxIconInfoEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconInfoProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconInfoElement | undefined;
}
export default RuxIconInfo;

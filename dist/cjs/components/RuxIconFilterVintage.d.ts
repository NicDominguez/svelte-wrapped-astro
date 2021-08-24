import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFilterVintageProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFilterVintage["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFilterVintage["size"];
}
interface RuxIconFilterVintageEvents {
}
interface RuxIconFilterVintageSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFilterVintage extends SvelteComponent {
    $$prop_def: RuxIconFilterVintageProps;
    $$events_def: RuxIconFilterVintageEvents;
    $$slot_def: RuxIconFilterVintageSlots;
    $on<K extends keyof RuxIconFilterVintageEvents>(type: K, callback: (e: RuxIconFilterVintageEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFilterVintageProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFilterVintageElement | undefined;
}
export default RuxIconFilterVintage;

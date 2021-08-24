import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPlaceProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPlace["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPlace["size"];
}
interface RuxIconPlaceEvents {
}
interface RuxIconPlaceSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPlace extends SvelteComponent {
    $$prop_def: RuxIconPlaceProps;
    $$events_def: RuxIconPlaceEvents;
    $$slot_def: RuxIconPlaceSlots;
    $on<K extends keyof RuxIconPlaceEvents>(type: K, callback: (e: RuxIconPlaceEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPlaceProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPlaceElement | undefined;
}
export default RuxIconPlace;

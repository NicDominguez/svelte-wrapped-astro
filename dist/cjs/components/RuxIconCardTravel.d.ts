import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCardTravelProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCardTravel["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCardTravel["size"];
}
interface RuxIconCardTravelEvents {
}
interface RuxIconCardTravelSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCardTravel extends SvelteComponent {
    $$prop_def: RuxIconCardTravelProps;
    $$events_def: RuxIconCardTravelEvents;
    $$slot_def: RuxIconCardTravelSlots;
    $on<K extends keyof RuxIconCardTravelEvents>(type: K, callback: (e: RuxIconCardTravelEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCardTravelProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCardTravelElement | undefined;
}
export default RuxIconCardTravel;

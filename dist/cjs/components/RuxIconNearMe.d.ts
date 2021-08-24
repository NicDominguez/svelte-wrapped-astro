import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNearMeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNearMe["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNearMe["size"];
}
interface RuxIconNearMeEvents {
}
interface RuxIconNearMeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNearMe extends SvelteComponent {
    $$prop_def: RuxIconNearMeProps;
    $$events_def: RuxIconNearMeEvents;
    $$slot_def: RuxIconNearMeSlots;
    $on<K extends keyof RuxIconNearMeEvents>(type: K, callback: (e: RuxIconNearMeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNearMeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNearMeElement | undefined;
}
export default RuxIconNearMe;

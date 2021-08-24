import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTurnedInNotProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTurnedInNot["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTurnedInNot["size"];
}
interface RuxIconTurnedInNotEvents {
}
interface RuxIconTurnedInNotSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTurnedInNot extends SvelteComponent {
    $$prop_def: RuxIconTurnedInNotProps;
    $$events_def: RuxIconTurnedInNotEvents;
    $$slot_def: RuxIconTurnedInNotSlots;
    $on<K extends keyof RuxIconTurnedInNotEvents>(type: K, callback: (e: RuxIconTurnedInNotEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTurnedInNotProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTurnedInNotElement | undefined;
}
export default RuxIconTurnedInNot;

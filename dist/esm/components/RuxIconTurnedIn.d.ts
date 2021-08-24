import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTurnedInProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTurnedIn["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTurnedIn["size"];
}
interface RuxIconTurnedInEvents {
}
interface RuxIconTurnedInSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTurnedIn extends SvelteComponent {
    $$prop_def: RuxIconTurnedInProps;
    $$events_def: RuxIconTurnedInEvents;
    $$slot_def: RuxIconTurnedInSlots;
    $on<K extends keyof RuxIconTurnedInEvents>(type: K, callback: (e: RuxIconTurnedInEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTurnedInProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTurnedInElement | undefined;
}
export default RuxIconTurnedIn;

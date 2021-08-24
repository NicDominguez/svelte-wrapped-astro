import { Components } from '@astrouxds/astro-web-components';
interface RuxIconToggleOnProps {
    /** The fill color for the icon */
    color?: Components.RuxIconToggleOn["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconToggleOn["size"];
}
interface RuxIconToggleOnEvents {
}
interface RuxIconToggleOnSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconToggleOn extends SvelteComponent {
    $$prop_def: RuxIconToggleOnProps;
    $$events_def: RuxIconToggleOnEvents;
    $$slot_def: RuxIconToggleOnSlots;
    $on<K extends keyof RuxIconToggleOnEvents>(type: K, callback: (e: RuxIconToggleOnEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconToggleOnProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconToggleOnElement | undefined;
}
export default RuxIconToggleOn;

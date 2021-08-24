import { Components } from '@astrouxds/astro-web-components';
interface RuxIconHdrOnProps {
    /** The fill color for the icon */
    color?: Components.RuxIconHdrOn["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconHdrOn["size"];
}
interface RuxIconHdrOnEvents {
}
interface RuxIconHdrOnSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconHdrOn extends SvelteComponent {
    $$prop_def: RuxIconHdrOnProps;
    $$events_def: RuxIconHdrOnEvents;
    $$slot_def: RuxIconHdrOnSlots;
    $on<K extends keyof RuxIconHdrOnEvents>(type: K, callback: (e: RuxIconHdrOnEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconHdrOnProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconHdrOnElement | undefined;
}
export default RuxIconHdrOn;

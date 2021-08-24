import { Components } from '@astrouxds/astro-web-components';
interface RuxIconHowToRegProps {
    /** The fill color for the icon */
    color?: Components.RuxIconHowToReg["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconHowToReg["size"];
}
interface RuxIconHowToRegEvents {
}
interface RuxIconHowToRegSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconHowToReg extends SvelteComponent {
    $$prop_def: RuxIconHowToRegProps;
    $$events_def: RuxIconHowToRegEvents;
    $$slot_def: RuxIconHowToRegSlots;
    $on<K extends keyof RuxIconHowToRegEvents>(type: K, callback: (e: RuxIconHowToRegEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconHowToRegProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconHowToRegElement | undefined;
}
export default RuxIconHowToReg;

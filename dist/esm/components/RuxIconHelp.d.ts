import { Components } from '@astrouxds/astro-web-components';
interface RuxIconHelpProps {
    /** The fill color for the icon */
    color?: Components.RuxIconHelp["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconHelp["size"];
}
interface RuxIconHelpEvents {
}
interface RuxIconHelpSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconHelp extends SvelteComponent {
    $$prop_def: RuxIconHelpProps;
    $$events_def: RuxIconHelpEvents;
    $$slot_def: RuxIconHelpSlots;
    $on<K extends keyof RuxIconHelpEvents>(type: K, callback: (e: RuxIconHelpEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconHelpProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconHelpElement | undefined;
}
export default RuxIconHelp;

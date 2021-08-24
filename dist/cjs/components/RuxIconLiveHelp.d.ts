import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLiveHelpProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLiveHelp["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLiveHelp["size"];
}
interface RuxIconLiveHelpEvents {
}
interface RuxIconLiveHelpSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLiveHelp extends SvelteComponent {
    $$prop_def: RuxIconLiveHelpProps;
    $$events_def: RuxIconLiveHelpEvents;
    $$slot_def: RuxIconLiveHelpSlots;
    $on<K extends keyof RuxIconLiveHelpEvents>(type: K, callback: (e: RuxIconLiveHelpEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLiveHelpProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLiveHelpElement | undefined;
}
export default RuxIconLiveHelp;

import { Components } from '@astrouxds/astro-web-components';
interface RuxIconThumbsUpDownProps {
    /** The fill color for the icon */
    color?: Components.RuxIconThumbsUpDown["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconThumbsUpDown["size"];
}
interface RuxIconThumbsUpDownEvents {
}
interface RuxIconThumbsUpDownSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconThumbsUpDown extends SvelteComponent {
    $$prop_def: RuxIconThumbsUpDownProps;
    $$events_def: RuxIconThumbsUpDownEvents;
    $$slot_def: RuxIconThumbsUpDownSlots;
    $on<K extends keyof RuxIconThumbsUpDownEvents>(type: K, callback: (e: RuxIconThumbsUpDownEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconThumbsUpDownProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconThumbsUpDownElement | undefined;
}
export default RuxIconThumbsUpDown;

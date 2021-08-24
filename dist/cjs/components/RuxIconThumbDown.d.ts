import { Components } from '@astrouxds/astro-web-components';
interface RuxIconThumbDownProps {
    /** The fill color for the icon */
    color?: Components.RuxIconThumbDown["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconThumbDown["size"];
}
interface RuxIconThumbDownEvents {
}
interface RuxIconThumbDownSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconThumbDown extends SvelteComponent {
    $$prop_def: RuxIconThumbDownProps;
    $$events_def: RuxIconThumbDownEvents;
    $$slot_def: RuxIconThumbDownSlots;
    $on<K extends keyof RuxIconThumbDownEvents>(type: K, callback: (e: RuxIconThumbDownEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconThumbDownProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconThumbDownElement | undefined;
}
export default RuxIconThumbDown;

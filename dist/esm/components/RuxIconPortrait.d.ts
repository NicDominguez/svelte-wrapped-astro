import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPortraitProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPortrait["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPortrait["size"];
}
interface RuxIconPortraitEvents {
}
interface RuxIconPortraitSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPortrait extends SvelteComponent {
    $$prop_def: RuxIconPortraitProps;
    $$events_def: RuxIconPortraitEvents;
    $$slot_def: RuxIconPortraitSlots;
    $on<K extends keyof RuxIconPortraitEvents>(type: K, callback: (e: RuxIconPortraitEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPortraitProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPortraitElement | undefined;
}
export default RuxIconPortrait;

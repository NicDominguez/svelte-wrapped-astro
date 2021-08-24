import { Components } from '@astrouxds/astro-web-components';
interface RuxIconUnfoldLessProps {
    /** The fill color for the icon */
    color?: Components.RuxIconUnfoldLess["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconUnfoldLess["size"];
}
interface RuxIconUnfoldLessEvents {
}
interface RuxIconUnfoldLessSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconUnfoldLess extends SvelteComponent {
    $$prop_def: RuxIconUnfoldLessProps;
    $$events_def: RuxIconUnfoldLessEvents;
    $$slot_def: RuxIconUnfoldLessSlots;
    $on<K extends keyof RuxIconUnfoldLessEvents>(type: K, callback: (e: RuxIconUnfoldLessEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconUnfoldLessProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconUnfoldLessElement | undefined;
}
export default RuxIconUnfoldLess;

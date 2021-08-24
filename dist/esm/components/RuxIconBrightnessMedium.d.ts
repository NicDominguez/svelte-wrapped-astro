import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBrightnessMediumProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBrightnessMedium["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBrightnessMedium["size"];
}
interface RuxIconBrightnessMediumEvents {
}
interface RuxIconBrightnessMediumSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBrightnessMedium extends SvelteComponent {
    $$prop_def: RuxIconBrightnessMediumProps;
    $$events_def: RuxIconBrightnessMediumEvents;
    $$slot_def: RuxIconBrightnessMediumSlots;
    $on<K extends keyof RuxIconBrightnessMediumEvents>(type: K, callback: (e: RuxIconBrightnessMediumEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBrightnessMediumProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBrightnessMediumElement | undefined;
}
export default RuxIconBrightnessMedium;

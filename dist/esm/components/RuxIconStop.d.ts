import { Components } from '@astrouxds/astro-web-components';
interface RuxIconStopProps {
    /** The fill color for the icon */
    color?: Components.RuxIconStop["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconStop["size"];
}
interface RuxIconStopEvents {
}
interface RuxIconStopSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconStop extends SvelteComponent {
    $$prop_def: RuxIconStopProps;
    $$events_def: RuxIconStopEvents;
    $$slot_def: RuxIconStopSlots;
    $on<K extends keyof RuxIconStopEvents>(type: K, callback: (e: RuxIconStopEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconStopProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconStopElement | undefined;
}
export default RuxIconStop;
